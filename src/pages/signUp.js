  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("Registered successfully");
        navigate('/login')
      })
      .catch((error) => {});
  };

  return (
    <div className="main">
      <center>
        {" "}
        <img src={Img} alt="" style={{ marginTop: "-35px",width:'200px' }} />{" "}
      </center>
      <h1>Sign Up.</h1>
      <input
        type="text"
        placeholder="Email"
        onChange={(event) => setEmail(event.target.value)}
      />
      {""}
      <br></br> <ul></ul>
      <input
        type="password"
        placeholder="Password"
        onChange={(event) => setPassword(event.target.value)}
      />
      <br></br> <ul></ul>
      <button type="submit" className="up" onClick={register}>
        Sign Up
      </button>
    </div>
  );
};
