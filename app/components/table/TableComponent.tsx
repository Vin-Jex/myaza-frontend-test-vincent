/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { JSX } from "react";
import { convertDateFormat, truncateAndEllipses } from "../utils/utils";
import Image from "next/image";

interface TableProps<T> {
  columns: Array<Column>;
  data: T[];
  onRowClick?: (row: T) => void;
  actions?: Array<Action<T>>;
  profileImageAccessor?: string;
}

interface Column {
  Header: string;
  accessor: string;
  Cell?: (props: { value: any }) => JSX.Element;
}

interface Action<T> {
  title: string;
  onClick: (data: T) => void;
  icon?: JSX.Element;
}

const getValueFromPath = (obj: any, path: string) => {
  return path.split(".").reduce((acc, part) => {
    if (acc && typeof acc === "object" && part in acc) {
      const isDate = part === "createdAt" || part === "updatedAt";

      return acc[part]
        ? isDate
          ? convertDateFormat(acc[part])
          : acc[part]
        : "N/A";
    }
    const match = part.match(/^(\w+)\[(\d+)\]$/);
    if (match) {
      const [, key, index] = match;
      const isDate = part === "createdAt" || part === "updatedAt";

      return acc[key]
        ? isDate
          ? convertDateFormat(acc[key][parseInt(index, 10)])
          : acc[key][parseInt(index, 10)]
        : "N/A";
    }
    return "N/A";
  }, obj);
};

export const Table = <T,>({
  columns,
  data,
  onRowClick,
  actions,
  profileImageAccessor,
}: TableProps<T>) => {
  return (
    <div className='overflow-x-auto !shadow-md rounded-sm pb-2 font-karla'>
      <table className='min-w-full table-auto'>
        <thead className=''>
          <tr className='text-primary-text text-sm border-b-[0.7px] border-[#2D2B4D]'>
            {columns.map((column, index) => (
              <th key={index} className='py-2 !text-start'>
                {column.Header}
              </th>
            ))}
            {actions && (
              <th className='py-4 border-b-[0.7px] border-[#2D2B4D] !text-start'>
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody className='!px-4'>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length + (actions ? 1 : 0)}
                className='px-4 py-4 text-center text-gray-500'
              >
                No data available
              </td>
            </tr>
          ) : (
            data.map((row, index) => {
              const profileImage = profileImageAccessor
                ? getValueFromPath(row, profileImageAccessor)
                : null;

              return (
                <tr
                  key={index}
                  onClick={() => onRowClick && onRowClick(row)}
                  className={`cursor-pointer hover:opacity-95 border-[#2D2B4D] ${
                    index === data.length - 1
                      ? "last:border-b-0 hover:last:border-b-0"
                      : "border-b-[0.7px]"
                  }`}
                >
                  {columns.map((column, colIndex) => (
                    <td key={colIndex} className='py-2 items-center space-x-2'>
                      <div className='flex items-center gap-2'>
                        {colIndex === 0 &&
                          profileImageAccessor &&
                          profileImage &&
                          profileImage !== "N/A" && (
                            <Image
                              width={30}
                              height={30}
                              src={profileImage || "/images/profile.svg"}
                              alt='Profile'
                              className='w-5 h-5 rounded-full object-cover'
                            />
                          )}
                        <span>
                          {column.Cell ? (
                            column.Cell({
                              value: truncateAndEllipses(
                                getValueFromPath(row, column.accessor),
                                30
                              ),
                            })
                          ) : column.accessor === "status" ? (
                            <span
                              className={`px-2 py-1 rounded-full text-sm ${
                                getValueFromPath(row, column.accessor) ===
                                "Completed"
                                  ? "bg-success/10 text-success"
                                  : getValueFromPath(row, column.accessor) ===
                                    "Failed"
                                  ? "bg-error/10 text-error"
                                  : "bg-primary/10 text-light"
                              }`}
                            >
                              {truncateAndEllipses(
                                getValueFromPath(row, column.accessor),
                                30
                              )}
                            </span>
                          ) : (
                            truncateAndEllipses(
                              getValueFromPath(row, column.accessor),
                              30
                            )
                          )}
                        </span>
                      </div>
                    </td>
                  ))}
                  {actions && (
                    <td className='px-4 py-3 flex space-x-2 justify-end'>
                      {actions.map((action, actionIndex) => (
                        <button
                          key={actionIndex}
                          onClick={(e) => {
                            e.stopPropagation();
                            action.onClick(row);
                          }}
                          className='py-2 px-2 text-sm text-gray-800 hover:bg-gray-100 rounded-full flex items-center justify-center'
                        >
                          {action.icon || action.title}
                        </button>
                      ))}
                    </td>
                  )}
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
