const getList = (author, keyword) => {
    // return data
    return [
        {
            id: 1,
            title: 'a',
            content: '内容A',
            createTime: 1562161324486,
            author: 'zhangsan'
        },
        {
            id: 2,
            title: 'a',
            content: '内容B',
            createTime: 1562161324486,
            author: 'lisi'
        },
        {
            id: 3,
            title: 'a',
            content: '内容C',
            createTime: 1562161324486,
            author: 'ww'
        },
        {
            id: 4,
            title: 'a',
            content: '内容A',
            createTime: 1562161324486,
            author: 'zl'
        }
    ]
}

const getDetail = id => {
    return {
        id: 1,
        title: 'a',
        content: '内容A',
        createTime: 1562161324486,
        author: 'zhangsan'
    }
}

module.exports = {
    getList,
    getDetail
}