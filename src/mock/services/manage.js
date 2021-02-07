import Mock from 'mockjs';
import { builder, getQueryParameters } from '../util';
import { random } from 'lodash';
const totalCount = 5701;

const serverList = options => {
    const parameter = getQueryParameters(options);
    const result = [];
    const pageNo = parseInt(parameter.pageNo);
    const pageSize = parseInt(parameter.pageSize);
    const totalPage = Math.ceil(totalCount / pageSize);

    const key = (pageNo - 1) * pageSize;

    const next = (pageNo >= totalPage ? totalCount % pageSize : pageSize) + 1;

    for (let i = 1; i < next; i++) {
        const tmpKey = key + i;
        result.push({
            key: tmpKey,
            id: tmpKey,
            no: 'No ' + tmpKey,
            description: '这是一段描述',
            licenseNumbers: /[鄂][A-Z]\d{5,7}/,
            // unit:Mock.mock(),
            used: () => {
                const arr = ['设计公司', '信达', '岩土'];
                return arr[Math.floor(random(2))];
            },
            callNo: Mock.mock('@integer(1, 999)'),
            status: Mock.mock('@integer(0, 1)'),
            updatedAt: Mock.mock('@datetime'),
            editable: false
        });
    }

    return builder({
        pageSize: pageSize,
        pageNo: pageNo,
        totalCount: totalCount,
        totalPage: totalPage,
        data: result
    });
};

Mock.mock(/\/service/, 'get', serverList);
