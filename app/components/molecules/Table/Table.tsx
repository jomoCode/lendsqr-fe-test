"use client";

import { CSSProperties } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { CellClickedEvent, ColDef } from "ag-grid-community";

import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";
ModuleRegistry.registerModules([AllCommunityModule]);

type TableProps = { rowData?: object[]; columnDefs: ColDef[];   onCellClick?: (row: T) => void; };
export type UsersTableType = TableProps;
const Table = ({ rowData, columnDefs, onCellClick }: TableProps) => {
  const containerStyle: CSSProperties = {
    width: "100%",
    height: "100%",
  };

  const defaultColDef = {
    headerClass: "custom-header-cell",
    cellClass: "custom-cell",
  };

  return (
    <div className="ag-theme-quartz" style={containerStyle}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        rowHeight={70}
        headerHeight={60}
        suppressRowHoverHighlight
        domLayout="autoHeight"
        pagination={true}
        paginationPageSize={10}
        suppressHorizontalScroll={false}
        onCellClicked={(event: CellClickedEvent<T>) => {
          if (!event.data) return;
          onCellClick?.(event.data);
        }}
      />
      <style jsx global>{`
        /* ===== HEADER CELL LAYOUT ===== */
        .custom-header-cell {
          display: flex !important;
          padding-left: 12px !important;
          padding-right: 12px !important;
        }
        .custom-header-cell .ag-cell-label-container {
          display: flex !important;
          flex-direction: row !important;
          gap: 0 !important;
          justify-content: flex-start !important;
        }
        .custom-header-cell .ag-header-icon {
          order: 1 !important;
          margin-left: -4px !important;
        }
        .custom-header-cell .ag-header-cell-label {
          order: 0 !important;
          margin: 0 !important;
          padding: 0 !important;
        }
        .custom-header-cell .ag-header-cell-label {
          display: inline-flex !important;
          justify-content: flex-start !important;
          align-items: center !important;
          gap: 0 !important;
          margin: 0 !important;
          padding: 0 !important;
        }

        /* ===== DATA CELL STYLING ===== */
        .custom-cell {
          display: flex !important;
          flex-direction: row !important;
          justify-content: flex-start !important;
          align-items: center !important;
          color: #545f7d !important;
        }

        /* ===== ICON AND SPACING ADJUSTMENTS ===== */
        .custom-header-cell .ag-header-icon {
          margin: 0 !important;
          padding: 0 !important;
        }
        .custom-header-cell .ag-filter-icon {
          margin: 0 !important;
        }
        .custom-header-cell .ag-header-cell-menu-button,
        .custom-header-cell .ag-header-icon.ag-filter-icon {
          margin-inline-start: 0 !important;
          border-right: 0 !important;
        }

        .ag-header-cell-resize {
          display: none !important;
        }

        /* ===== TEXT STYLING ===== */
        .ag-header-cell-text {
          font-weight: 500 !important;
          font-size: 0.75rem !important;
          line-height: 1 !important;
          color: #545f7d !important;
        }

        /* ===== TABLE CONTAINER BORDERS ===== */
        .ag-theme-quartz {
          border: none !important;
        }

        .ag-root {
          border: none !important;
        }

        .ag-root-wrapper {
          border: none !important;
        }

        /* ===== HEADER STYLING ===== */
        .ag-header {
          background-color: white !important;
          border: none !important;
        }

        .ag-header-row {
          border-bottom: none !important;
          background-color: white !important;
        }

        .ag-header-cell {
          border-right: none !important;
          border-bottom: none !important;
          background-color: white !important;
        }

        .ag-header-row-separator {
          display: none !important;
        }

        /* ===== FOOTER STYLING ===== */
        .ag-paging-panel {
          width: 100% !important;
          display: flex !important;
          justify-content: space-between !important;
          align-items: center !important;
          padding: 12px !important;
          background-color: white !important;
          border-top: 1px solid #e3e9f3 !important;
          gap: 12px !important;
        }

        .ag-paging-panel .ag-paging-button {
          margin: 0 !important;
        }

        .ag-paging-left-part,
        .ag-paging-center-part,
        .ag-paging-right-part {
          display: flex !important;
          align-items: center !important;
          gap: 8px !important;
        }

        .ag-bottom {
          width: 100% !important;
        }

        /* ===== MOBILE RESPONSIVE STYLING ===== */
        @media (max-width: 768px) {
          .custom-header-cell {
            padding-left: 8px !important;
            padding-right: 8px !important;
          }

          .ag-header-cell-text {
            font-size: 0.65rem !important;
            font-weight: 500 !important;
          }

          .custom-cell {
            font-size: 0.7rem !important;
            color: #545f7d !important;
          }

          .ag-paging-panel {
            padding: 8px !important;
            gap: 8px !important;
            flex-wrap: wrap !important;
            justify-content: center !important;
          }

          .ag-paging-left-part,
          .ag-paging-center-part,
          .ag-paging-right-part {
            gap: 4px !important;
            font-size: 0.7rem !important;
          }

          .ag-paging-panel .ag-paging-button {
            padding: 4px 6px !important;
            font-size: 0.65rem !important;
          }
        }

        @media (max-width: 640px) {
          .custom-header-cell {
            padding-left: 6px !important;
            padding-right: 6px !important;
          }

          .ag-header-cell-text {
            font-size: 0.6rem !important;
          }

          .custom-cell {
            font-size: 0.65rem !important;
          }

          .ag-paging-panel {
            padding: 6px !important;
            gap: 4px !important;
          }

          .ag-paging-left-part,
          .ag-paging-center-part,
          .ag-paging-right-part {
            gap: 3px !important;
            font-size: 0.6rem !important;
          }

          .ag-paging-panel .ag-paging-button {
            padding: 3px 5px !important;
            font-size: 0.6rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export { Table };
