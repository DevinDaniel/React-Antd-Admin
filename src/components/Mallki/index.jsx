/*
 * @Author: devin 1041378793@qq,com
 * @Date: 2023-01-12 10:24:56
 * @LastEditors: devin 1041378793@qq,com
 * @LastEditTime: 2023-01-12 10:27:41
 * @FilePath: \react-admin\src\components\Mallki\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import './index.scss'

const Mallki = ({ className, text }) => {
	return (
    <a className={`mallki ${className}`} href="#/">
      {text}
      <span data-letters={text} />
      <span data-letters={text} />
    </a>
	);
};

export default Mallki;