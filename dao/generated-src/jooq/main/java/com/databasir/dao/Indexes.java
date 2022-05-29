/*
 * This file is generated by jOOQ.
 */
package com.databasir.dao;


import com.databasir.dao.tables.DataSourceProperty;
import com.databasir.dao.tables.DocumentDiscussion;
import com.databasir.dao.tables.DocumentFullText;
import com.databasir.dao.tables.ProjectSyncTask;
import com.databasir.dao.tables.TableColumnDocument;
import com.databasir.dao.tables.TableDocument;
import com.databasir.dao.tables.TableForeignKeyDocument;
import com.databasir.dao.tables.TableIndexDocument;
import com.databasir.dao.tables.TableTriggerDocument;

import org.jooq.Index;
import org.jooq.OrderField;
import org.jooq.impl.DSL;
import org.jooq.impl.Internal;


/**
 * A class modelling indexes of tables in databasir.
 */
@SuppressWarnings({ "all", "unchecked", "rawtypes" })
public class Indexes {

    // -------------------------------------------------------------------------
    // INDEX definitions
    // -------------------------------------------------------------------------

    public static final Index DOCUMENT_FULL_TEXT_FIDX_COLUMN = Internal.createIndex(DSL.name("fidx_column"), DocumentFullText.DOCUMENT_FULL_TEXT, new OrderField[] { DocumentFullText.DOCUMENT_FULL_TEXT.COL_NAME, DocumentFullText.DOCUMENT_FULL_TEXT.COL_COMMENT, DocumentFullText.DOCUMENT_FULL_TEXT.DATABASE_PRODUCT_NAME }, false);
    public static final Index DOCUMENT_FULL_TEXT_FIDX_GROUP = Internal.createIndex(DSL.name("fidx_group"), DocumentFullText.DOCUMENT_FULL_TEXT, new OrderField[] { DocumentFullText.DOCUMENT_FULL_TEXT.GROUP_NAME, DocumentFullText.DOCUMENT_FULL_TEXT.GROUP_DESCRIPTION }, false);
    public static final Index DOCUMENT_FULL_TEXT_FIDX_PROJECT = Internal.createIndex(DSL.name("fidx_project"), DocumentFullText.DOCUMENT_FULL_TEXT, new OrderField[] { DocumentFullText.DOCUMENT_FULL_TEXT.PROJECT_NAME, DocumentFullText.DOCUMENT_FULL_TEXT.PROJECT_DESCRIPTION, DocumentFullText.DOCUMENT_FULL_TEXT.SCHEMA_NAME, DocumentFullText.DOCUMENT_FULL_TEXT.DATABASE_NAME, DocumentFullText.DOCUMENT_FULL_TEXT.DATABASE_TYPE }, false);
    public static final Index DOCUMENT_FULL_TEXT_FIDX_TABLE = Internal.createIndex(DSL.name("fidx_table"), DocumentFullText.DOCUMENT_FULL_TEXT, new OrderField[] { DocumentFullText.DOCUMENT_FULL_TEXT.TABLE_NAME, DocumentFullText.DOCUMENT_FULL_TEXT.TABLE_COMMENT, DocumentFullText.DOCUMENT_FULL_TEXT.DATABASE_PRODUCT_NAME }, false);
    public static final Index DATA_SOURCE_PROPERTY_IDX_DATA_SOURCE_ID = Internal.createIndex(DSL.name("idx_data_source_id"), DataSourceProperty.DATA_SOURCE_PROPERTY, new OrderField[] { DataSourceProperty.DATA_SOURCE_PROPERTY.DATA_SOURCE_ID }, false);
    public static final Index TABLE_COLUMN_DOCUMENT_IDX_DATABASE_DOCUMENT_ID = Internal.createIndex(DSL.name("idx_database_document_id"), TableColumnDocument.TABLE_COLUMN_DOCUMENT, new OrderField[] { TableColumnDocument.TABLE_COLUMN_DOCUMENT.DATABASE_DOCUMENT_ID }, false);
    public static final Index TABLE_DOCUMENT_IDX_DATABASE_DOCUMENT_ID = Internal.createIndex(DSL.name("idx_database_document_id"), TableDocument.TABLE_DOCUMENT, new OrderField[] { TableDocument.TABLE_DOCUMENT.DATABASE_DOCUMENT_ID }, false);
    public static final Index TABLE_FOREIGN_KEY_DOCUMENT_IDX_DATABASE_DOCUMENT_ID = Internal.createIndex(DSL.name("idx_database_document_id"), TableForeignKeyDocument.TABLE_FOREIGN_KEY_DOCUMENT, new OrderField[] { TableForeignKeyDocument.TABLE_FOREIGN_KEY_DOCUMENT.DATABASE_DOCUMENT_ID }, false);
    public static final Index TABLE_INDEX_DOCUMENT_IDX_DATABASE_DOCUMENT_ID = Internal.createIndex(DSL.name("idx_database_document_id"), TableIndexDocument.TABLE_INDEX_DOCUMENT, new OrderField[] { TableIndexDocument.TABLE_INDEX_DOCUMENT.DATABASE_DOCUMENT_ID }, false);
    public static final Index TABLE_TRIGGER_DOCUMENT_IDX_DATABASE_DOCUMENT_ID = Internal.createIndex(DSL.name("idx_database_document_id"), TableTriggerDocument.TABLE_TRIGGER_DOCUMENT, new OrderField[] { TableTriggerDocument.TABLE_TRIGGER_DOCUMENT.DATABASE_DOCUMENT_ID }, false);
    public static final Index DOCUMENT_FULL_TEXT_IDX_GROUP_ID = Internal.createIndex(DSL.name("idx_group_id"), DocumentFullText.DOCUMENT_FULL_TEXT, new OrderField[] { DocumentFullText.DOCUMENT_FULL_TEXT.GROUP_ID }, false);
    public static final Index DOCUMENT_DISCUSSION_IDX_PROJECT_ID = Internal.createIndex(DSL.name("idx_project_id"), DocumentDiscussion.DOCUMENT_DISCUSSION, new OrderField[] { DocumentDiscussion.DOCUMENT_DISCUSSION.PROJECT_ID }, false);
    public static final Index DOCUMENT_FULL_TEXT_IDX_PROJECT_ID = Internal.createIndex(DSL.name("idx_project_id"), DocumentFullText.DOCUMENT_FULL_TEXT, new OrderField[] { DocumentFullText.DOCUMENT_FULL_TEXT.PROJECT_ID }, false);
    public static final Index PROJECT_SYNC_TASK_IDX_PROJECT_ID = Internal.createIndex(DSL.name("idx_project_id"), ProjectSyncTask.PROJECT_SYNC_TASK, new OrderField[] { ProjectSyncTask.PROJECT_SYNC_TASK.PROJECT_ID }, false);
    public static final Index DOCUMENT_FULL_TEXT_IDX_TABLE_DOCUMENT_ID = Internal.createIndex(DSL.name("idx_table_document_id"), DocumentFullText.DOCUMENT_FULL_TEXT, new OrderField[] { DocumentFullText.DOCUMENT_FULL_TEXT.TABLE_DOCUMENT_ID }, false);
    public static final Index TABLE_COLUMN_DOCUMENT_IDX_TABLE_DOCUMENT_ID = Internal.createIndex(DSL.name("idx_table_document_id"), TableColumnDocument.TABLE_COLUMN_DOCUMENT, new OrderField[] { TableColumnDocument.TABLE_COLUMN_DOCUMENT.TABLE_DOCUMENT_ID }, false);
    public static final Index TABLE_FOREIGN_KEY_DOCUMENT_IDX_TABLE_DOCUMENT_ID = Internal.createIndex(DSL.name("idx_table_document_id"), TableForeignKeyDocument.TABLE_FOREIGN_KEY_DOCUMENT, new OrderField[] { TableForeignKeyDocument.TABLE_FOREIGN_KEY_DOCUMENT.TABLE_DOCUMENT_ID }, false);
    public static final Index TABLE_INDEX_DOCUMENT_IDX_TABLE_DOCUMENT_ID = Internal.createIndex(DSL.name("idx_table_document_id"), TableIndexDocument.TABLE_INDEX_DOCUMENT, new OrderField[] { TableIndexDocument.TABLE_INDEX_DOCUMENT.TABLE_DOCUMENT_ID }, false);
    public static final Index TABLE_TRIGGER_DOCUMENT_IDX_TABLE_DOCUMENT_ID = Internal.createIndex(DSL.name("idx_table_document_id"), TableTriggerDocument.TABLE_TRIGGER_DOCUMENT, new OrderField[] { TableTriggerDocument.TABLE_TRIGGER_DOCUMENT.TABLE_DOCUMENT_ID }, false);
    public static final Index PROJECT_SYNC_TASK_IDX_USER_ID = Internal.createIndex(DSL.name("idx_user_id"), ProjectSyncTask.PROJECT_SYNC_TASK, new OrderField[] { ProjectSyncTask.PROJECT_SYNC_TASK.USER_ID }, false);
}
