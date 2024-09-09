function Footer() {
  return (
    <>
      <footer className="footer bg-white text-base-content p-10">
        <aside>
          <div>
            <div>
              <h1 className="font-bold text-3xl text-left">Furniro</h1>
            </div>
            <div className="text-left py-12">
              <p>
                400 University Drive Suite 200 Coral
                <br /> Gables,
                <br /> FL 33134 USA
              </p>
            </div>
          </div>
        </aside>
        <nav className="gap-6">
          <h6 className="footer-title">Links</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Shop</a>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav className="gap-6">
          <h6 className="footer-title">Help</h6>
          <a className="link link-hover">Payment Options</a>
          <a className="link link-hover">Returns</a>
          <a className="link link-hover">Privacy Policies</a>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
      <hr />
      <aside>
        <p className="mt-2">
          Copyright © {new Date().getFullYear()} - All right reserved by Furniro
        </p>
      </aside>
    </>
  );
}
export { Footer };
