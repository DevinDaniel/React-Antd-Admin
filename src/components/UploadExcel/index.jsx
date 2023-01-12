import React, { useEffect } from "react";
import { message, Upload } from "antd";
import XLSX from "xlsx";
import { InboxOutlined } from "@ant-design/icons";
const { Dragger } = Upload;

const getHeaderRow = (sheet) => {
  const headers = [];
  const range = XLSX.utils.decode_range(sheet["!ref"]);
  let C;
  const R = range.s.r;
  /* start in the first row */
  for (C = range.s.c; C <= range.e.c; ++C) {
    /* walk every column in the range */
    const cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })];
    /* find the cell in the first row */
    let hdr = "UNKNOWN " + C; // <-- replace with your desired default
    if (cell && cell.t) hdr = XLSX.utils.format_cell(cell);
    headers.push(hdr);
  }
  return headers;
};
const isExcel = (file) => {
  return /\.(xlsx|xls|csv)$/.test(file.name);
};
// 阻止默认事件Function
const forbidDefaultEvent = (e) => {
  e.preventDefault();
};

const UploadExcel = ({uploadSuccess,remove}) => {
  const props = {
    name: "file",
    multiple: false,
    accept: ".xlsx, .xls",
		maxCount:1,
    // action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status === "done") {
        message.success(`${info.file.name} 文件上传成功`);
      } else if (status === "error") {
        message.error(`${info.file.name} 文件上传失败`);
      }
    },
    beforeUpload(file, fileList) {
      if (!isExcel(file)) {
        message.error("仅支持上传.xlsx, .xls, .csv 文件");
        return false;
      }
    },
		customRequest(e) {
			readerData(e.file).then(() => {
				e.onSuccess();
			});
		},
    onRemove(file){
			remove()
		}
  };
  const readerData = (rawFile) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: "array" });
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const header = getHeaderRow(worksheet);
        const results = XLSX.utils.sheet_to_json(worksheet);
        generateData({ header, results });
        resolve();
      };
      reader.readAsArrayBuffer(rawFile);
    });
  };
  const generateData = ({ header, results }) => {
    uploadSuccess && uploadSuccess({
			header, 
			results 
		});
  };
  useEffect(() => {
    // 禁止浏览器打开拖拽的文件/图片
    setTimeout(()=>{
			document.addEventListener("drop", forbidDefaultEvent, false);
    	document.addEventListener("dragover", forbidDefaultEvent, false);
		},200)
    return () => {
      document.removeEventListener("drop", forbidDefaultEvent, false);
      document.removeEventListener("dragover", forbidDefaultEvent, false);
    };
  }, []);
  return (
    <div className="" id="#file-drag-container">
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading
          company data or other band files
        </p>
      </Dragger>
    </div>
  );
};

export default UploadExcel;
