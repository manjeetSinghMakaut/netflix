const LoginFooter = () => {
    return (
      <footer className="bg-black text-gray-400 py-16 pl-10 z-20 h-[500px] -mt-1">
        <div className="max-w-4xl flex flex-col justify-between ">
          <div className="text-sm text-white mb-8 opacity-80 pt-48">
            <p className="mb-2">
              Questions? Call{" "}
              <a
                href="tel:000-800-919-1743"
                className="underline hover:text-gray-300"
              >
                000-800-919-1743
              </a>
            </p>
          </div>
  
          <div>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-white opacity-80">
              <li>
                <a
                  href="https://help.netflix.com/support/412"
                  target="_self"
                  className="hover:underline  hover:text-gray-300"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="https://help.netflix.com"
                  target="_self"
                  className="hover:underline hover:text-gray-300"
                >
                  Help Centre
                </a>
              </li>
              <li>
                <a
                  href="https://help.netflix.com/legal/termsofuse"
                  target="_self"
                  className="hover:underline hover:text-gray-300"
                >
                  Terms of Use
                </a>
              </li>
              <li>
                <a
                  href="https://help.netflix.com/legal/privacy"
                  target="_self"
                  className="hover:underline hover:text-gray-300"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="https://help.netflix.com/legal/privacy"
                  className="hover:underline hover:text-gray-300"
                >
                  Cookie Preferences
                </a>
              </li>
              <li>
                <a
                  href="https://help.netflix.com/legal/corpinfo"
                  target="_self"
                  className="hover:underline hover:text-gray-300"
                >
                  Corporate Information
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  };
  
  export default LoginFooter;
  