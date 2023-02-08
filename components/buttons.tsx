// GetstartedButton
// SubmitButton

<<<<<<< HEAD
interface btnprops {
  classes: string;
  btnText: string;
}

const Button = (props: btnprops) => {
  const { classes, btnText } = props;
  return <button className={classes}>{btnText}</button>;
};

export default Button;
=======

import styles from "../styles/herodesigns/buttondesign.module.scss"



const GetstartedButton = () => {
    return (
        <div style={{textAlign: "center", marginTop: "15px"}}>

      <button className={styles.Signin} type="button">
     GET STARTED
      </button>
      </div>
    );
  };
  export default GetstartedButton;



 
>>>>>>> feda5416a7db8382346557ce8763219295f879ed
