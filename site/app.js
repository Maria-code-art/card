// Показать форму для записи
function showForm() {
    document.getElementById('formContainer').style.display = 'block';
}

// Обработка отправки формы
document.getElementById('consultationForm').addEventListener('submit', function(event) {
    event.preventDefault();  // предотвращает отправку формы и перезагрузку страницы
    alert('Спасибо за вашу заявку! Мы свяжемся с вами в ближайшее время.');
    document.getElementById('consultationForm').reset();  // сбрасывает форму
    document.getElementById('formContainer').style.display = 'none';  // скрывает форму
});