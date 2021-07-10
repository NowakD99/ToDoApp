export function getFormData(task, isCompleted) {
    let formData = new FormData();
    formData.append('task', task);
    formData.append('is_completed', isCompleted ? 1 : 0);
    return formData
}