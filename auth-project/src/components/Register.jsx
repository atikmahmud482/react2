const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const pass = e.target.pass.value;
    console.log(name, email, pass);
  };

  return (
    <div>
      <form onSubmit={handleRegister}>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Register</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <fieldset className="fieldset">
                  {/* Name Field */}
                  <label className="fieldset-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="input"
                    placeholder="Full Name"
                    required
                  />

                  {/* Email Field */}
                  <label className="fieldset-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Email"
                    required
                  />

                  {/* Password Field */}
                  <label className="fieldset-label">Password</label>
                  <input
                    type="password"
                    name="pass"
                    className="input"
                    placeholder="Password"
                    required
                  />

                  {/* Forgot Password Link */}
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>

                  {/* Register Button */}
                  <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>

                {/* "Already have an account?" Section */}
                <div className="mt-4 text-center">
                  <p>
                    Already have an account? Please{" "}
                    <a href="/login" className="text-blue-500 font-semibold">
                      Login
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
