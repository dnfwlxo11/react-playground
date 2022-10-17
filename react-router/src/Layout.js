import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div>
            <header style={{ background: 'lightgray', padding: 16, fontSize: 24 }}>
                Header
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;