type ValueBuilder<T extends any = Record<string, string>> = (args: T) => string

interface TestValues {
  routes: Record<routes, TestRoutes>
}

type TestRoutes = ValueBuilder<any>

// RoutesBuilders
export type routes = 'Homepage' | 'EmployeesList' | 'AddEmployeeProfile' | 'EditEmployeesProfile'
const Homepage = () => ''
const EmployeesList = () => '/employees'
const AddEmployeeProfile = () => '/employees/new'
const EditEmployeesProfile: ValueBuilder<{ employee_id: string }> = ({employee_id}) => `/employees/${employee_id}`

const values: TestValues = {
  routes: {
    Homepage,
    EmployeesList,
    AddEmployeeProfile,
    EditEmployeesProfile
  }
}

export default values
