export const handleSubmit = async (values, action) => {
  try {
    const data = alert(JSON.stringify(values, null, 2));
    action.resetForm();
  } catch (error) {
    console.log('Помилка при надсиланні запиту:', error.message);
  }
};
