import dashboardOR from '../objectrepo/Dashboard.json'
class DashboardPage{
    logout(){
        cy.get(dashboardOR.profile).click()
        cy.contains(dashboardOR.logoutBtn).click()
    }
}
export default new DashboardPage()