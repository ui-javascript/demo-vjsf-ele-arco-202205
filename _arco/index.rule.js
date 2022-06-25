export default [
    {
        type: 'group',
        field: 'group',
        title: 'group',
        value: [{ field1: 'aaa', field2: 'sss' }, { field1: 'aaa', field2: 'sss' }],
        props: {
            defaultValue: { field1: 'field1', field2: 'field2' },
            rule: [
                { type: 'input', field: 'field1', title: 'field1' },
                { type: 'input', field: 'field2', title: 'field2' },
            ]
        }
    },
]