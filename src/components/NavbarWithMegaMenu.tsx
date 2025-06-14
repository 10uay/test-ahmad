import {
  Navbar,
  // Typography,
  // List,
  // ListItem,
} from "@material-tailwind/react";
// import {
  // useState,
//   useEffect,
// } from "react";
import {
  Link,
  // useLocation
} from "react-router-dom";
// import { useSelector } from "react-redux";
import { ShinyButton } from "@/components/magicui/shiny-button";

// Define types
// interface NavListProps {
//   setOpenNav: (open: boolean) => void;
// }

// interface NavbarWithMegaMenuProps {
//   domain: string;
// }

// function NavList({ setOpenNav }: NavListProps) {
//   const location = useLocation();

//   return (
//     <List className="select-none mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
//       {/* Subscribers */}
//       <Typography
//         as="span"
//         variant="small"
//         color="default"
//         className="font-medium"
//       >
//         <Link to="/subscribers">
//           <ListItem
//             className={`${location.pathname.includes("/subscribers") &&
//               "!text-opacity-100 !bg-opacity-90 !bg-blue-gray-50"
//               } flex items-center gap-2 py-2 pr-4 text-[15px] capitalize font-semibold text-gray-700`}
//             onClick={() => setOpenNav(false)}
//           >
//             المشتركين
//           </ListItem>
//         </Link>
//       </Typography>

//       {/* Certificates */}
//       <Typography
//         as="span"
//         variant="small"
//         color="default"
//         className="font-medium"
//       >
//         <Link to="/certificates">
//           <ListItem
//             className={`${location.pathname.includes("/certificates") &&
//               "!text-opacity-100 !bg-opacity-90 !bg-blue-gray-50"
//               } flex items-center gap-2 py-2 pr-4 text-[15px] capitalize font-semibold text-gray-700`}
//             onClick={() => setOpenNav(false)}
//           >
//             الشهادات
//           </ListItem>
//         </Link>
//       </Typography>

//       {/* Payment */}
//       <Typography
//         as="span"
//         variant="small"
//         color="default"
//         className="font-medium"
//       >
//         <Link to="/payment">
//           <ListItem
//             className={`${location.pathname.includes("/payment") &&
//               "!text-opacity-100 !bg-opacity-90 !bg-blue-gray-50"
//               } flex items-center gap-2 py-2 pr-4 text-[15px] capitalize font-semibold text-gray-700`}
//             onClick={() => setOpenNav(false)}
//           >
//             الدفع
//           </ListItem>
//         </Link>
//       </Typography>
//     </List>
//   );
// }

export default function NavbarWithMegaMenu() {
  // const [openNav, setOpenNav] = useState(false);
  // const user = useSelector((state: any) => state.user.currentUser);

  // useEffect(() => {
  //   const handleResize = () => window.innerWidth >= 960 && setOpenNav(false);
  //   window.addEventListener("resize", handleResize);

  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  return (
    <Navbar
      className="mx-auto max-w-screen-xl lg:w-[1000px] md:w-[500px] w-[300px] px-4 lg:py-1 py-2 lg:mb-2 border border-gray-300 border-t-0 rounded-t-none shadow-none"
    // placeholder={undefined}
    // onPointerEnterCapture={undefined}
    // onPointerLeaveCapture={undefined}
    >
      <div className="flex flex-row-reverse items-center justify-between text-blue-gray-900">
        {/* LOGO */}
        <div className="mr-0 cursor-pointer lg:ml-2">
          <Link to="/" className="flex justify-center items-center gap-2">
            <img
              loading="lazy"
              src="/images/images.png"
              alt="just a logo"
              className="lg:w-14 w-9"
            />
          </Link>
        </div>

        {/* LIST */}
        {/* <div className="hidden lg:block">
          {user !== null && <NavList setOpenNav={setOpenNav} />}
        </div> */}

        {/* SIGNIN/LOGOUT BTN */}
        <div className=" gap-2 ">
          <Link to="/login" >
            <ShinyButton>Login</ShinyButton>
          </Link>
        </div>

        {/* <IconButton
          variant="solid"
          color="primary"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        // placeholder={undefined}
        // onPointerEnterCapture={undefined}
        // onPointerLeaveCapture={undefined}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton> */}
      </div>
    </Navbar>
  );
}