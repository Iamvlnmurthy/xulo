import React from 'react';
import { MoreVertical, Edit, Trash2, Eye } from 'lucide-react';

const Table = ({ columns, data, onAction }) => {
    return (
        <div className="overflow-x-auto bg-white rounded-lg border border-gray-200 shadow-sm">
            <table className="w-full text-left border-collapse">
                <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-semibold tracking-wider">
                    <tr>
                        {columns.map((col, idx) => (
                            <th key={idx} className="px-6 py-4 border-b border-gray-200">
                                {col.header}
                            </th>
                        ))}
                        <th className="px-6 py-4 border-b border-gray-200 text-right">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {data.length === 0 ? (
                        <tr>
                            <td colSpan={columns.length + 1} className="px-6 py-12 text-center text-gray-400">
                                No records found.
                            </td>
                        </tr>
                    ) : (
                        data.map((row, rowIdx) => (
                            <tr key={rowIdx} className="hover:bg-gray-50/50 transition-colors">
                                {columns.map((col, colIdx) => (
                                    <td key={colIdx} className="px-6 py-4 text-sm text-gray-700 whitespace-nowrap">
                                        {col.render ? col.render(row) : row[col.accessor]}
                                    </td>
                                ))}
                                <td className="px-6 py-4 text-right">
                                    {onAction ? (
                                        <div className="flex items-center justify-end gap-2">
                                            <button onClick={() => onAction('view', row)} className="p-1.5 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors" title="View">
                                                <Eye size={16} />
                                            </button>
                                            <button onClick={() => onAction('edit', row)} className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors" title="Edit">
                                                <Edit size={16} />
                                            </button>
                                            <button onClick={() => onAction('delete', row)} className="p-1.5 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors" title="Delete">
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    ) : (
                                        <button className="text-gray-400 hover:text-gray-600">
                                            <MoreVertical size={16} />
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
