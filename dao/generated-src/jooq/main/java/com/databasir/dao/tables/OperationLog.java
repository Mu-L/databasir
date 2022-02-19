/*
 * This file is generated by jOOQ.
 */
package com.databasir.dao.tables;


import com.databasir.dao.Databasir;
import com.databasir.dao.Keys;
import com.databasir.dao.tables.records.OperationLogRecord;

import java.time.LocalDateTime;

import org.jooq.Field;
import org.jooq.ForeignKey;
import org.jooq.Identity;
import org.jooq.JSON;
import org.jooq.Name;
import org.jooq.Record;
import org.jooq.Row13;
import org.jooq.Schema;
import org.jooq.Table;
import org.jooq.TableField;
import org.jooq.TableOptions;
import org.jooq.UniqueKey;
import org.jooq.impl.DSL;
import org.jooq.impl.SQLDataType;
import org.jooq.impl.TableImpl;


/**
 * This class is generated by jOOQ.
 */
@SuppressWarnings({ "all", "unchecked", "rawtypes" })
public class OperationLog extends TableImpl<OperationLogRecord> {

    private static final long serialVersionUID = 1L;

    /**
     * The reference instance of <code>databasir.operation_log</code>
     */
    public static final OperationLog OPERATION_LOG = new OperationLog();

    /**
     * The class holding records for this type
     */
    @Override
    public Class<OperationLogRecord> getRecordType() {
        return OperationLogRecord.class;
    }

    /**
     * The column <code>databasir.operation_log.id</code>.
     */
    public final TableField<OperationLogRecord, Long> ID = createField(DSL.name("id"), SQLDataType.BIGINT.nullable(false).identity(true), this, "");

    /**
     * The column <code>databasir.operation_log.operator_user_id</code>. ref to
     * user.id
     */
    public final TableField<OperationLogRecord, Integer> OPERATOR_USER_ID = createField(DSL.name("operator_user_id"), SQLDataType.INTEGER.nullable(false), this, "ref to user.id");

    /**
     * The column <code>databasir.operation_log.operator_username</code>.
     * user.username
     */
    public final TableField<OperationLogRecord, String> OPERATOR_USERNAME = createField(DSL.name("operator_username"), SQLDataType.VARCHAR(128).nullable(false), this, "user.username");

    /**
     * The column <code>databasir.operation_log.operator_nickname</code>.
     * user.nickname
     */
    public final TableField<OperationLogRecord, String> OPERATOR_NICKNAME = createField(DSL.name("operator_nickname"), SQLDataType.VARCHAR(255).nullable(false), this, "user.nickname");

    /**
     * The column <code>databasir.operation_log.operation_module</code>.
     */
    public final TableField<OperationLogRecord, String> OPERATION_MODULE = createField(DSL.name("operation_module"), SQLDataType.VARCHAR(128).nullable(false), this, "");

    /**
     * The column <code>databasir.operation_log.operation_code</code>.
     */
    public final TableField<OperationLogRecord, String> OPERATION_CODE = createField(DSL.name("operation_code"), SQLDataType.VARCHAR(255).nullable(false), this, "");

    /**
     * The column <code>databasir.operation_log.operation_name</code>.
     */
    public final TableField<OperationLogRecord, String> OPERATION_NAME = createField(DSL.name("operation_name"), SQLDataType.VARCHAR(255).nullable(false), this, "");

    /**
     * The column <code>databasir.operation_log.operation_response</code>.
     */
    public final TableField<OperationLogRecord, JSON> OPERATION_RESPONSE = createField(DSL.name("operation_response"), SQLDataType.JSON.nullable(false), this, "");

    /**
     * The column <code>databasir.operation_log.is_success</code>.
     */
    public final TableField<OperationLogRecord, Boolean> IS_SUCCESS = createField(DSL.name("is_success"), SQLDataType.BOOLEAN.nullable(false).defaultValue(DSL.inline("0", SQLDataType.BOOLEAN)), this, "");

    /**
     * The column <code>databasir.operation_log.involved_project_id</code>. ref
     * to project.id
     */
    public final TableField<OperationLogRecord, Integer> INVOLVED_PROJECT_ID = createField(DSL.name("involved_project_id"), SQLDataType.INTEGER, this, "ref to project.id");

    /**
     * The column <code>databasir.operation_log.involved_group_id</code>. ref to
     * group.id
     */
    public final TableField<OperationLogRecord, Integer> INVOLVED_GROUP_ID = createField(DSL.name("involved_group_id"), SQLDataType.INTEGER, this, "ref to group.id");

    /**
     * The column <code>databasir.operation_log.involved_user_id</code>. ref to
     * user.id
     */
    public final TableField<OperationLogRecord, Integer> INVOLVED_USER_ID = createField(DSL.name("involved_user_id"), SQLDataType.INTEGER, this, "ref to user.id");

    /**
     * The column <code>databasir.operation_log.create_at</code>.
     */
    public final TableField<OperationLogRecord, LocalDateTime> CREATE_AT = createField(DSL.name("create_at"), SQLDataType.LOCALDATETIME(0).nullable(false).defaultValue(DSL.field("CURRENT_TIMESTAMP", SQLDataType.LOCALDATETIME)), this, "");

    private OperationLog(Name alias, Table<OperationLogRecord> aliased) {
        this(alias, aliased, null);
    }

    private OperationLog(Name alias, Table<OperationLogRecord> aliased, Field<?>[] parameters) {
        super(alias, null, aliased, parameters, DSL.comment(""), TableOptions.table());
    }

    /**
     * Create an aliased <code>databasir.operation_log</code> table reference
     */
    public OperationLog(String alias) {
        this(DSL.name(alias), OPERATION_LOG);
    }

    /**
     * Create an aliased <code>databasir.operation_log</code> table reference
     */
    public OperationLog(Name alias) {
        this(alias, OPERATION_LOG);
    }

    /**
     * Create a <code>databasir.operation_log</code> table reference
     */
    public OperationLog() {
        this(DSL.name("operation_log"), null);
    }

    public <O extends Record> OperationLog(Table<O> child, ForeignKey<O, OperationLogRecord> key) {
        super(child, key, OPERATION_LOG);
    }

    @Override
    public Schema getSchema() {
        return aliased() ? null : Databasir.DATABASIR;
    }

    @Override
    public Identity<OperationLogRecord, Long> getIdentity() {
        return (Identity<OperationLogRecord, Long>) super.getIdentity();
    }

    @Override
    public UniqueKey<OperationLogRecord> getPrimaryKey() {
        return Keys.KEY_OPERATION_LOG_PRIMARY;
    }

    @Override
    public OperationLog as(String alias) {
        return new OperationLog(DSL.name(alias), this);
    }

    @Override
    public OperationLog as(Name alias) {
        return new OperationLog(alias, this);
    }

    /**
     * Rename this table
     */
    @Override
    public OperationLog rename(String name) {
        return new OperationLog(DSL.name(name), null);
    }

    /**
     * Rename this table
     */
    @Override
    public OperationLog rename(Name name) {
        return new OperationLog(name, null);
    }

    // -------------------------------------------------------------------------
    // Row13 type methods
    // -------------------------------------------------------------------------

    @Override
    public Row13<Long, Integer, String, String, String, String, String, JSON, Boolean, Integer, Integer, Integer, LocalDateTime> fieldsRow() {
        return (Row13) super.fieldsRow();
    }
}