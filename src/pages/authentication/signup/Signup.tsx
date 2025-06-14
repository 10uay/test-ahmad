import Stepper, { Step } from "@/components/bits/Stepper/Stepper";
import TextPressure from "@/components/bits/TextAnimations/TextPressure/TextPressure";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="container mx-auto lg:w-[600px] w-full mt-10">
      <div className="relative sm:h-[250px] h-[150px] select-none">
        <TextPressure
          text="signup!"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#000"
          strokeColor="#ff0000"
          minFontSize={36}
        />
      </div>

      <Stepper
        initialStep={1}
        onStepChange={(step) => {
          console.log(step);
        }}
        onFinalStepCompleted={() => console.log("All steps completed!")}
        backButtonText="Previous"
        nextButtonText="Next"
      >
        <Step>
          <h2 className="text-xl font-bold">Welcome to your website!</h2>
          <p>Check out the next step!</p>
          <Link to='/login' className=" block capitalize underline text-[#5227ff] !mt-4">or go to login!</Link>
        </Step>
        <Step>
          <Label htmlFor="email" className="text-xl capitalize mb-2">Enter your email:</Label>
          <Input id="email" type="email" placeholder="Email" className="mb-1" />
        </Step>
        <Step>
          <Label htmlFor="password" className="text-xl capitalize mb-2">Enter the password:</Label>
          <Input id="password" type="password" placeholder="******" className="mb-1" />
        </Step>
        <Step>
          <h2>Final Step</h2>
          <p>You made it!</p>
        </Step>
      </Stepper>
    </div>
  )
}
