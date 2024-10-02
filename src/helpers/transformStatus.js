export const transformStatus = (result) => {
    return result.recordset.map(item => {
        return {
            ...item,
            estado: item.estado ? 'Completado' : 'No Completado'
        };
    });
};