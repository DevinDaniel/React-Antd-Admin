/*
 * @Author: devin 1041378793@qq,com
 * @Date: 2023-01-12 10:15:14
 * @LastEditors: devin 1041378793@qq,com
 * @LastEditTime: 2023-01-12 10:18:13
 * @FilePath: \react-admin\src\components\PanThumb\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import './index.scss'

const PanThumb = ({image, zIndex, width, height, className}) => {
	return (
    <div
      className={`pan-item ${className}`}
      style={{
        zIndex,
        height,
        width,
      }}
    >
      <div className="pan-info">
        <div className="pan-info-roles-container"></div>
      </div>
      <img src={image} className="pan-thumb" alt="" />
    </div>
	);
};

export default PanThumb;