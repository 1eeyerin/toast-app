const resolver = (formValues) => {
  let error = "";

  if (!formValues.title) {
    error = "제목과 내용을 모두 입력해주세요";
  }

  if (!formValues.content) {
    error = "제목과 내용을 모두 입력해주세요";
  }

  return error;
};

export default resolver;
