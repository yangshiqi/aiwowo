import { SUMMARY_COLUMNS, SUMMARY_ROWS } from "./data";

/**
 * "Model summary" panel body — ranked model table reproduced verbatim from the
 * reference DOM (values, bar widths, and bar colors all extracted from it).
 */
export function SummaryPanel() {
  return (
    <>
      <div className="absolute inset-0 overflow-x-hidden overflow-y-auto pr-4 pl-4 lg:static lg:max-h-[421px] lg:pl-11">
        <table role="table" className="block w-full border-collapse text-left lg:table">
          <thead role="rowgroup" className="sr-only lg:not-sr-only lg:sticky lg:top-0 lg:z-10 lg:table-header-group lg:bg-white">
            <tr role="row" className="border-b border-gray-2 text-xs text-gray-6">
              <th scope="col" className="bg-white py-2 pr-3 font-normal">基座模型</th>
              {SUMMARY_COLUMNS.map((column, columnIndex) => (
                <th
                  key={column.label}
                  scope="col"
                  className="bg-white py-2 pr-2 text-right font-normal"
                  aria-sort={columnIndex === 0 ? "ascending" : "none"}
                >
                  <button type="button" className="inline-flex items-center gap-1 whitespace-nowrap hover:text-ink">
                    {column.label}
                    {columnIndex === 0 ? <span aria-hidden="true">↑</span> : null}
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody role="rowgroup" className="block lg:table-row-group">
            {SUMMARY_ROWS.map((row) => (
              <tr
                key={row.model}
                role="row"
                className="grid grid-cols-2 gap-x-4 border-b border-gray-2/60 py-3 lg:table-row lg:gap-0 lg:py-0"
              >
                <th
                  scope="row"
                  role="rowheader"
                  className="col-span-2 pr-3 pb-2 text-left text-sm font-normal text-ink lg:table-cell lg:py-2.5 lg:pb-0"
                >
                  <span className="flex items-center gap-2">
                    <img
                      alt=""
                      loading="eager"
                      width={row.logoW}
                      height={row.logoH}
                      className="shrink-0"
                      style={{ color: "transparent", width: "16px", height: "auto" }}
                      src={row.logo}
                    />
                    {row.model}
                  </span>
                </th>
                {row.cells.map((cell, cellIndex) => (
                  <td
                    key={SUMMARY_COLUMNS[cellIndex].label}
                    role="cell"
                    data-label={SUMMARY_COLUMNS[cellIndex].label}
                    className="flex items-baseline justify-between gap-2 py-0.5 pr-2 align-middle before:text-xs before:text-gray-6 before:content-[attr(data-label)] lg:table-cell lg:py-2.5 lg:before:content-none"
                  >
                    <span className="flex items-center justify-end gap-1.5">
                      <span aria-hidden="true" className="hidden h-[3px] w-6 shrink-0 rounded-full bg-gray-1 sm:block">
                        <span
                          className="block h-full rounded-full"
                          style={{ width: cell.barWidth, background: SUMMARY_COLUMNS[cellIndex].barColor }}
                        />
                      </span>
                      <span className="shrink-0 font-mono text-xs text-ink">{cell.value}</span>
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-white to-transparent lg:hidden"
      />
    </>
  );
}
