import { Routes, Route } from "react-router-dom";
import { Landing, Login, AllProyects, Upload, Contact, Details } from '../windows';

export function AppRouter() {
    return (
        <Routes>
            <Route path='/' element={<Landing />} />
            <Route path="/projects" element={<AllProyects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/details/:projectId" element={<Details />} />
            <Route path="/*" element={<h1>404</h1>} />
        </Routes>
    );
}
