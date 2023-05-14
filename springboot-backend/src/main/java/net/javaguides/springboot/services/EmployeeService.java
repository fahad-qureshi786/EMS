package net.javaguides.springboot.services;

import net.javaguides.springboot.dao.EmployeeRepository;
import net.javaguides.springboot.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;

    public Employee getEmployeeById(Integer id) throws Exception {
        return employeeRepository.findById(id).orElseThrow(()-> new Exception("Couldn't find employee'"));
    }

    public List<Employee> getAllEmployees() throws Exception {
        return employeeRepository.findAll();
    }

    public Employee updateEmployee(Employee employee) throws Exception {
        return employeeRepository.save(employee);
    }

    public Employee addEmployee(Employee employee) throws Exception {
        return employeeRepository.save(employee);
    }

    public Employee deleteEmployeeById(Integer id) throws Exception {
        Employee employee =  employeeRepository.findById(id).orElseThrow(()-> new Exception("Couldn't find employee'"));
        employeeRepository.delete(employee);
        return employee;
    }

}
