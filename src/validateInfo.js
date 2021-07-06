export default function validateInfo(values) {
    let errors = {};
  
    if (!values.userName) {
      errors.userName = 'Пожалуйста, заполните поле';
    } 
  
    if (!values.feedback) {
      errors.feedback = 'Пожалуйста, заполните поле';
    } 
  
    return errors;
  }