import * as XLSX from "xlsx"
import fs from "fs"
import path from "path"

export const createExcel = (data: unknown[], nameFile: string) => {

  const worksheet = XLSX.utils.json_to_sheet(data)
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, nameFile);
  const buffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
  // Crea un archivo temporal en el servidor
  const filePath = path.join(__dirname, '..', '..', `${nameFile}.xlsx`);
  fs.writeFileSync(filePath, buffer);
}