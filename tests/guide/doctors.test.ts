import { describe, expect, it } from 'vitest'
import { findDoctor, doctorGroups, getDoctorsByDepartment } from '../../src/guide/doctors'

describe('doctors', () => {
  it('should export doctorGroups data', () => {
    expect(doctorGroups).toBeDefined()
    expect(Array.isArray(doctorGroups)).toBe(true)
    expect(doctorGroups.length).toBeGreaterThan(0)
  })

  it('should find doctor by id', () => {
    const doctor = findDoctor('chen-guoqiang')
    expect(doctor).toBeDefined()
    expect(doctor?.name).toBe('陈国强')
    expect(doctor?.title).toBe('主任医师')
  })

  it('should return null for non-existent doctor', () => {
    const doctor = findDoctor('non-existent')
    expect(doctor).toBeNull()
  })

  it('should get doctors by department', () => {
    const doctors = getDoctorsByDepartment('general-surgery')
    expect(Array.isArray(doctors)).toBe(true)
    expect(doctors.length).toBeGreaterThan(0)
    expect(doctors[0].departmentId).toBe('general-surgery')
  })

  it('should return empty array for non-existent department', () => {
    const doctors = getDoctorsByDepartment('non-existent')
    expect(Array.isArray(doctors)).toBe(true)
    expect(doctors.length).toBe(0)
  })

  it('should have correct doctor structure', () => {
    const doctor = doctorGroups[0].doctors[0]
    expect(doctor).toHaveProperty('id')
    expect(doctor).toHaveProperty('name')
    expect(doctor).toHaveProperty('title')
    expect(doctor).toHaveProperty('department')
    expect(doctor).toHaveProperty('intro')
    expect(doctor).toHaveProperty('expertise')
    expect(doctor).toHaveProperty('practice')
    expect(doctor).toHaveProperty('available')
  })
})
