export default defineEventHandler(async (event) => {
    const dataStorage = useStorage('user');
    await dataStorage.setItem('tom', '123123');

    return {
        user: await dataStorage.getItem("tom"),
    }
})