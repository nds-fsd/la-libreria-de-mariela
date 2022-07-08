import MyInput from "./input";

export default {
  title: "Input",
  component: MyInput,
  args: {
    label: "My text Goes Here",
    color: "beige",
  },
};

const MyInputTemplate = (args) => <MyInput {...args} />;

const Standard = MyInputTemplate.bind({});

const MyInputTextArea = MyInputTemplate.bind({});
MyInputTextArea.args = {
  type: "textarea",
  label: "Textarea here",
  color: "red",
};

export { Standard, MyInputTextArea };
