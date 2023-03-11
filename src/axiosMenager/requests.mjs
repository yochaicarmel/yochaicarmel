import axios from "axios";

export async function getIDS (soldierId) {
    try {
        const res = await axios.get(`http://localhost:3000/soldier/${soldierId}/ids`);
        return res.data;
    } catch (err) {
        console.log(err);
    }
}

export async function getBonuses (soldierId) {
    try {
        const res = await axios.get(`http://localhost:3000/soldier/${soldierId}/bonuses`);
        return res.data;
    } catch (err) {
        console.log(err);
    }
}

export async function getGmushim (soldierId) {
    try {
        const res = await axios.get(`http://localhost:3000/soldier/${soldierId}/gmushim`);
        return res.data;
    } catch (err) {
        console.log(err);
    }
}

export async function getCourses (soldierId) {
    try {
        const res = await axios.get(`http://localhost:3000/soldier/${soldierId}/courses`);
        return res.data;
    } catch (err) {
        console.log(err);
    }
}

export async function getDoch1Unit (unit) {
    try {
        const res = await axios.get(`http://localhost:3000/${unit}`);
        return res.data;
    } catch (err) {
        console.log(err)
    }
}

export async function getDoch1General () {
    try {
        const res = await axios.get(`http://localhost:3000`);
        return res.data;
    } catch (err) {
        console.log(err)
    }
}

export async function updateCourse (soldierId, course) {
    try {
        const res = await axios.post(`http://localhost:3000/soldier/${soldierId}/courses/update`, {course});
        return res.data
    } catch (err) {
        console.log(err)
    }
}

export async function addCourse (soldierId, course) {
    try {
        const res = await axios.post(`http://localhost:3000/soldier/${soldierId}/courses/add`, {course});
        return res.data
    } catch (err) {
        console.log(err)
    }
}

export async function deleteCourse (soldierId, course) {
    try {
        const res = await axios.post(`http://localhost:3000/soldier/${soldierId}/courses/delete`, {course});
        return res.data
    } catch (err) {
        console.log(err)
    }
}