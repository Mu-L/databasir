/*
 * This file is generated by jOOQ.
 */
package com.databasir.dao.tables;


import com.databasir.dao.Databasir;
import com.databasir.dao.Keys;
import com.databasir.dao.tables.records.SysMailRecord;

import java.time.LocalDateTime;

import org.jooq.Field;
import org.jooq.ForeignKey;
import org.jooq.Identity;
import org.jooq.Name;
import org.jooq.Record;
import org.jooq.Row9;
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
public class SysMailTable extends TableImpl<SysMailRecord> {

    private static final long serialVersionUID = 1L;

    /**
     * The reference instance of <code>databasir.sys_mail</code>
     */
    public static final SysMailTable SYS_MAIL = new SysMailTable();

    /**
     * The class holding records for this type
     */
    @Override
    public Class<SysMailRecord> getRecordType() {
        return SysMailRecord.class;
    }

    /**
     * The column <code>databasir.sys_mail.id</code>.
     */
    public final TableField<SysMailRecord, Integer> ID = createField(DSL.name("id"), SQLDataType.INTEGER.nullable(false).identity(true), this, "");

    /**
     * The column <code>databasir.sys_mail.username</code>.
     */
    public final TableField<SysMailRecord, String> USERNAME = createField(DSL.name("username"), SQLDataType.CLOB.nullable(false), this, "");

    /**
     * The column <code>databasir.sys_mail.password</code>.
     */
    public final TableField<SysMailRecord, String> PASSWORD = createField(DSL.name("password"), SQLDataType.CLOB.nullable(false), this, "");

    /**
     * The column <code>databasir.sys_mail.smtp_host</code>.
     */
    public final TableField<SysMailRecord, String> SMTP_HOST = createField(DSL.name("smtp_host"), SQLDataType.VARCHAR(512).nullable(false), this, "");

    /**
     * The column <code>databasir.sys_mail.smtp_port</code>.
     */
    public final TableField<SysMailRecord, Integer> SMTP_PORT = createField(DSL.name("smtp_port"), SQLDataType.INTEGER.nullable(false), this, "");

    /**
     * The column <code>databasir.sys_mail.use_ssl</code>.
     */
    public final TableField<SysMailRecord, Boolean> USE_SSL = createField(DSL.name("use_ssl"), SQLDataType.BOOLEAN.nullable(false).defaultValue(DSL.inline("0", SQLDataType.BOOLEAN)), this, "");

    /**
     * The column <code>databasir.sys_mail.update_at</code>.
     */
    public final TableField<SysMailRecord, LocalDateTime> UPDATE_AT = createField(DSL.name("update_at"), SQLDataType.LOCALDATETIME(0).nullable(false).defaultValue(DSL.field("CURRENT_TIMESTAMP", SQLDataType.LOCALDATETIME)), this, "");

    /**
     * The column <code>databasir.sys_mail.create_at</code>.
     */
    public final TableField<SysMailRecord, LocalDateTime> CREATE_AT = createField(DSL.name("create_at"), SQLDataType.LOCALDATETIME(0).nullable(false).defaultValue(DSL.field("CURRENT_TIMESTAMP", SQLDataType.LOCALDATETIME)), this, "");

    /**
     * The column <code>databasir.sys_mail.mail_from</code>.
     */
    public final TableField<SysMailRecord, String> MAIL_FROM = createField(DSL.name("mail_from"), SQLDataType.VARCHAR(512), this, "");

    private SysMailTable(Name alias, Table<SysMailRecord> aliased) {
        this(alias, aliased, null);
    }

    private SysMailTable(Name alias, Table<SysMailRecord> aliased, Field<?>[] parameters) {
        super(alias, null, aliased, parameters, DSL.comment(""), TableOptions.table());
    }

    /**
     * Create an aliased <code>databasir.sys_mail</code> table reference
     */
    public SysMailTable(String alias) {
        this(DSL.name(alias), SYS_MAIL);
    }

    /**
     * Create an aliased <code>databasir.sys_mail</code> table reference
     */
    public SysMailTable(Name alias) {
        this(alias, SYS_MAIL);
    }

    /**
     * Create a <code>databasir.sys_mail</code> table reference
     */
    public SysMailTable() {
        this(DSL.name("sys_mail"), null);
    }

    public <O extends Record> SysMailTable(Table<O> child, ForeignKey<O, SysMailRecord> key) {
        super(child, key, SYS_MAIL);
    }

    @Override
    public Schema getSchema() {
        return aliased() ? null : Databasir.DATABASIR;
    }

    @Override
    public Identity<SysMailRecord, Integer> getIdentity() {
        return (Identity<SysMailRecord, Integer>) super.getIdentity();
    }

    @Override
    public UniqueKey<SysMailRecord> getPrimaryKey() {
        return Keys.KEY_SYS_MAIL_PRIMARY;
    }

    @Override
    public SysMailTable as(String alias) {
        return new SysMailTable(DSL.name(alias), this);
    }

    @Override
    public SysMailTable as(Name alias) {
        return new SysMailTable(alias, this);
    }

    /**
     * Rename this table
     */
    @Override
    public SysMailTable rename(String name) {
        return new SysMailTable(DSL.name(name), null);
    }

    /**
     * Rename this table
     */
    @Override
    public SysMailTable rename(Name name) {
        return new SysMailTable(name, null);
    }

    // -------------------------------------------------------------------------
    // Row9 type methods
    // -------------------------------------------------------------------------

    @Override
    public Row9<Integer, String, String, String, Integer, Boolean, LocalDateTime, LocalDateTime, String> fieldsRow() {
        return (Row9) super.fieldsRow();
    }
}
