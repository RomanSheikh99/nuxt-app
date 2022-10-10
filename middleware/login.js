export default (content) => {
    console.log(content)
    content.$axios.$post('resigter', {
        email: 'test@test.com',
        password: '123456'
    }).then(res => console.log(res))
}