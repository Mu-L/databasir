package com.databasir.core.meta.provider.mysql;

import com.databasir.core.meta.data.TriggerMeta;
import com.databasir.core.meta.provider.TriggerMetaProvider;
import com.databasir.core.meta.provider.condition.TableCondition;
import lombok.extern.slf4j.Slf4j;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Slf4j
public class MysqlTableTriggerMetaProvider implements TriggerMetaProvider {

    private static final Pattern DATE_TIME_PATTERN =
            Pattern.compile("(\\d{4}-\\d{2}-\\d{2} \\d{2}:\\d{2}:\\d{2})(.*)");

    @Override
    public List<TriggerMeta> selectTriggers(Connection connection, TableCondition condition) {
        String sql = "SELECT TRIGGER_CATALOG,\n"
                + "       TRIGGER_SCHEMA,\n"
                + "       TRIGGER_NAME,\n"
                + "       EVENT_MANIPULATION,\n"
                + "       EVENT_OBJECT_CATALOG,\n"
                + "       EVENT_OBJECT_SCHEMA,\n"
                + "       EVENT_OBJECT_TABLE,\n"
                + "       ACTION_ORDER,\n"
                + "       ACTION_CONDITION,\n"
                + "       ACTION_STATEMENT,\n"
                + "       ACTION_ORIENTATION,\n"
                + "       ACTION_TIMING,\n"
                + "       ACTION_REFERENCE_OLD_TABLE,\n"
                + "       ACTION_REFERENCE_NEW_TABLE,\n"
                + "       ACTION_REFERENCE_OLD_ROW,\n"
                + "       ACTION_REFERENCE_NEW_ROW,\n"
                + "       CREATED,\n"
                + "       SQL_MODE,\n"
                + "       DEFINER\n "
                + "FROM information_schema.TRIGGERS WHERE EVENT_OBJECT_SCHEMA = ? AND EVENT_OBJECT_TABLE = ?";
        try {
            PreparedStatement preparedStatement = connection.prepareStatement(sql);
            preparedStatement.setObject(1, condition.getDatabaseName());
            preparedStatement.setObject(2, condition.getTableName());
            ResultSet results = preparedStatement.executeQuery();
            List<TriggerMeta> triggers = new ArrayList<>();
            while (results.next()) {
                String name = results.getString("TRIGGER_NAME");
                String statement = results.getString("ACTION_STATEMENT");
                String timing = results.getString("ACTION_TIMING");
                String manipulation = results.getString("EVENT_MANIPULATION");
                String created = results.getString("CREATED");
                if (created != null) {
                    Matcher matcher = DATE_TIME_PATTERN.matcher(created);
                    if (matcher.matches()) {
                        created = matcher.group(1);
                    }
                }
                TriggerMeta meta = TriggerMeta.builder()
                        .name(name)
                        .manipulation(manipulation)
                        .timing(timing)
                        .statement(statement)
                        .createAt(created)
                        .build();
                triggers.add(meta);
            }
            return triggers;
        } catch (SQLException e) {
            log.warn("get trigger meta failed", e);
            return Collections.emptyList();
        }
    }

}