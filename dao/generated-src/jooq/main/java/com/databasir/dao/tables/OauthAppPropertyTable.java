/*
 * This file is generated by jOOQ.
 */
package com.databasir.dao.tables;


import com.databasir.dao.Databasir;
import com.databasir.dao.Indexes;
import com.databasir.dao.Keys;
import com.databasir.dao.tables.records.OauthAppPropertyRecord;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

import org.jooq.Field;
import org.jooq.ForeignKey;
import org.jooq.Identity;
import org.jooq.Index;
import org.jooq.Name;
import org.jooq.Record;
import org.jooq.Row5;
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
public class OauthAppPropertyTable extends TableImpl<OauthAppPropertyRecord> {

    private static final long serialVersionUID = 1L;

    /**
     * The reference instance of <code>databasir.oauth_app_property</code>
     */
    public static final OauthAppPropertyTable OAUTH_APP_PROPERTY = new OauthAppPropertyTable();

    /**
     * The class holding records for this type
     */
    @Override
    public Class<OauthAppPropertyRecord> getRecordType() {
        return OauthAppPropertyRecord.class;
    }

    /**
     * The column <code>databasir.oauth_app_property.id</code>.
     */
    public final TableField<OauthAppPropertyRecord, Integer> ID = createField(DSL.name("id"), SQLDataType.INTEGER.nullable(false).identity(true), this, "");

    /**
     * The column <code>databasir.oauth_app_property.oauth_app_id</code>.
     * oauth_app.id
     */
    public final TableField<OauthAppPropertyRecord, Integer> OAUTH_APP_ID = createField(DSL.name("oauth_app_id"), SQLDataType.INTEGER.nullable(false), this, "oauth_app.id");

    /**
     * The column <code>databasir.oauth_app_property.name</code>.
     */
    public final TableField<OauthAppPropertyRecord, String> NAME = createField(DSL.name("name"), SQLDataType.CLOB.nullable(false), this, "");

    /**
     * The column <code>databasir.oauth_app_property.value</code>.
     */
    public final TableField<OauthAppPropertyRecord, String> VALUE = createField(DSL.name("value"), SQLDataType.CLOB.nullable(false), this, "");

    /**
     * The column <code>databasir.oauth_app_property.create_at</code>.
     */
    public final TableField<OauthAppPropertyRecord, LocalDateTime> CREATE_AT = createField(DSL.name("create_at"), SQLDataType.LOCALDATETIME(0).nullable(false).defaultValue(DSL.field("CURRENT_TIMESTAMP", SQLDataType.LOCALDATETIME)), this, "");

    private OauthAppPropertyTable(Name alias, Table<OauthAppPropertyRecord> aliased) {
        this(alias, aliased, null);
    }

    private OauthAppPropertyTable(Name alias, Table<OauthAppPropertyRecord> aliased, Field<?>[] parameters) {
        super(alias, null, aliased, parameters, DSL.comment(""), TableOptions.table());
    }

    /**
     * Create an aliased <code>databasir.oauth_app_property</code> table
     * reference
     */
    public OauthAppPropertyTable(String alias) {
        this(DSL.name(alias), OAUTH_APP_PROPERTY);
    }

    /**
     * Create an aliased <code>databasir.oauth_app_property</code> table
     * reference
     */
    public OauthAppPropertyTable(Name alias) {
        this(alias, OAUTH_APP_PROPERTY);
    }

    /**
     * Create a <code>databasir.oauth_app_property</code> table reference
     */
    public OauthAppPropertyTable() {
        this(DSL.name("oauth_app_property"), null);
    }

    public <O extends Record> OauthAppPropertyTable(Table<O> child, ForeignKey<O, OauthAppPropertyRecord> key) {
        super(child, key, OAUTH_APP_PROPERTY);
    }

    @Override
    public Schema getSchema() {
        return aliased() ? null : Databasir.DATABASIR;
    }

    @Override
    public List<Index> getIndexes() {
        return Arrays.asList(Indexes.OAUTH_APP_PROPERTY_IDX_OAUTH_APP_ID);
    }

    @Override
    public Identity<OauthAppPropertyRecord, Integer> getIdentity() {
        return (Identity<OauthAppPropertyRecord, Integer>) super.getIdentity();
    }

    @Override
    public UniqueKey<OauthAppPropertyRecord> getPrimaryKey() {
        return Keys.KEY_OAUTH_APP_PROPERTY_PRIMARY;
    }

    @Override
    public OauthAppPropertyTable as(String alias) {
        return new OauthAppPropertyTable(DSL.name(alias), this);
    }

    @Override
    public OauthAppPropertyTable as(Name alias) {
        return new OauthAppPropertyTable(alias, this);
    }

    /**
     * Rename this table
     */
    @Override
    public OauthAppPropertyTable rename(String name) {
        return new OauthAppPropertyTable(DSL.name(name), null);
    }

    /**
     * Rename this table
     */
    @Override
    public OauthAppPropertyTable rename(Name name) {
        return new OauthAppPropertyTable(name, null);
    }

    // -------------------------------------------------------------------------
    // Row5 type methods
    // -------------------------------------------------------------------------

    @Override
    public Row5<Integer, Integer, String, String, LocalDateTime> fieldsRow() {
        return (Row5) super.fieldsRow();
    }
}