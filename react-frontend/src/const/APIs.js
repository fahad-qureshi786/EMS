const BASE_URL = 'http://localhost:9090/'
export const APIs = {
    EMPLOYEES: {
        GET_ALL: `${BASE_URL}employees/`,
        ADD: `${BASE_URL}employees/addEmployee`,
        UPDATE: `${BASE_URL}employees/updateEmployee`,
        DELETE: `${BASE_URL}employees/deleteEmployee`,
        FIND_BY_ID: `${BASE_URL}employees/findById`,
    }
}
