// GetstartedButton
// SubmitButton

interface btnprops {
  classes: string;
  btnText: string;
}

const Button = (props: btnprops) => {
  const { classes, btnText } = props;
  return <button className={classes}>{btnText}</button>;
};

export default Button;
