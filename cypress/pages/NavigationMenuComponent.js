import { FormsPage } from "./PageObjectLogin";
import { FormsPageReg } from "../pages/FormsPageReg";

export class NavMenuComponent {
    elements= {
        authMenu: () => cy.get("[class='menu-title']")
    }
    openAuthPage() {
        this.elements.authMenu().click();
        return new FormsPage();
    }
    }
