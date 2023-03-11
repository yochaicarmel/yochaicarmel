export default {
    methods: {
        formatMongoDate (date) {
            const formatedDate = new Date(`${date}`);
            return `${formatedDate.getDate()}.${formatedDate.getMonth() + 1}.${formatedDate.getFullYear()}`;
        }
    }
}