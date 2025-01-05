"use client";

import * as React from "react";
import Logo from "./logo";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import {
  ChevronDown,
  Menu,
  UserCheck,
  FileText,
  BookOpen,
  User,
  BarChart,
  AlertTriangle,
} from "lucide-react";

const features = [
  {
    icon: UserCheck,
    title: "Attendance Management",
    description:
      "Track student and staff attendance with real-time reporting and automated records.",
  },
  {
    icon: FileText,
    title: "Fee Management",
    description:
      "Simplify fee collection and manage invoices, receipts, and payment tracking effortlessly.",
  },
  {
    icon: BookOpen,
    title: "Library Management",
    description:
      "Organize and manage library resources, including book cataloging and borrowing history.",
  },
  {
    icon: User,
    title: "Student Profiles",
    description:
      "Maintain detailed student records, including academic performance, activities, and personal information.",
  },
  {
    icon: BarChart,
    title: "Performance Analytics",
    description:
      "Analyze student performance trends and generate insightful reports for teachers and parents.",
  },
  {
    icon: AlertTriangle,
    title: "Notifications & Alerts",
    description:
      "Send instant updates to students, parents, and staff about important announcements and events.",
  },
];

export default function SiteHeader() {
  const [open, setOpen] = React.useState(false);
  const [showFeatures, setShowFeatures] = React.useState(false);

  return (
    <div className="  bg-gray-900 text-white">
      <header className="fixed top-0 left-0 right-0 z-20 bg-gradient-to-r from-black via-gray-700 to-black bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className=" flex h-20 items-center justify-around">
        <Logo />
          <div className= "flex items-center space-x-8 ">
            <NavigationMenu className=" hidden md:flex ">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center   px-4 py-2 text-xl font-medium text-gray-200 transition-colors hover:bg-cyan-500 hover:text-black rounded-full">
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-200 text-xl transition-colors hover:bg-cyan-500 hover:text-black rounded-full">
                    Features
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[600px] p-4  bg-gradient-to-r from-violet-500 via-blue-500 to-violet-500 rounded-3xl">
                      <div className="flex items-center justify-between mb-4 pb-2 border-b border-black">
                        <h4 className="text-lg font-medium text-black">
                          Features
                        </h4>
                        <Link
                          href="/features"
                          className="text-sm text-black hover:underline"
                        >
                          View all
                        </Link>
                      </div>
                      <div className="grid gap-4 md:grid-cols-2">
                        {features.map((feature, index) => (
                          <Link
                            key={index}
                            href={`/feature/${feature.title
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className="block group"
                          >
                            <div className="flex items-start gap-4">
                              <div className="p-2 bg-white rounded-md group-hover:bg-gray-900">
                                <feature.icon className="h-6 w-6 text-violet-600" />
                              </div>
                              <div>
                                <h5 className="font-medium mb-1 text-black group-hover:scale-110 transition-transform duration-300">
                                  {feature.title}
                                </h5>
                                <p className="text-sm text-black line-clamp-2">
                                  {feature.description}
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    
                    <div className="mt-6 pt-4 border-t border-black">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold mb-1 text-black">
                              Get started
                            </h4>
                            <p className="text-sm text-black line-clamp-3">
                            Streamline your school operations and empower educators, students, and parents with our all-in-one school management system.
                             From attendance tracking to fee management, performance analytics, and real-time notifications, everything you need is just a click away.
                             Start today and transform the way your school functions!
                            </p>
                          </div>
                          <Button asChild variant="secondary"><Link href="/About">Get started </Link></Button>
                        </div>
                      </div>
                      </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/learn" legacyBehavior passHref>
                    <NavigationMenuLink className="group text-xl inline-flex h-9 w-max items-center justify-center rounded-full  px-4 py-2  font-medium text-gray-200 transition-colors hover:bg-cyan-500 hover:text-black">
                      Learn
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/academy" legacyBehavior passHref>
                    <NavigationMenuLink className="group text-xl inline-flex h-9 w-max items-center justify-center rounded-full  px-4 py-2  font-medium text-gray-200 transition-colors hover:bg-cyan-500 hover:text-black">
                      Academy
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-gray-200 transition-colors hover:bg-cyan-500 hover:text-black text-xl border rounded-full"
            >
              Log in
            </Button>
            <Button className=" text-white transition-colors hover:bg-cyan-500 hover:text-black text-xl border rounded-full">
              Sign up
            </Button>
          </div>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-200 hover:bg-cyan-500 hover:text-black transition-colors duration-200 "
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-3/4 bg-gray-900 text-gray-200 p-4">
                <SheetHeader className="mb-4 border-b border-gray-700 pb-2">
                  <SheetTitle className="text-xl font-bold text-cyan-400">
                    Navigation
                  </SheetTitle>
                </SheetHeader>
                <div className="space-y-4">
                  <Link
                    href="/"
                    className="block px-4 py-2 text-lg font-medium rounded-lg bg-gray-800 transition-colors duration-200 hover:bg-cyan-500 hover:text-black"
                    onClick={() => setOpen(false)}
                  >
                    Home
                  </Link>
                  <div className="space-y-2">
                    <button
                      className="flex w-full items-center justify-between px-4 py-2 text-lg font-medium bg-gray-800 rounded-lg transition-colors duration-200 hover:bg-cyan-500 hover:text-black"
                      onClick={() => setShowFeatures(!showFeatures)}
                    >
                      Features
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 transition-transform",
                          showFeatures && "rotate-180"
                        )}
                      />
                    </button>
                    {showFeatures && (
                      <div className="pl-4 space-y-2">
                        {features.map((feature, index) => (
                          <Link
                            key={index}
                            href={`/feature/${feature.title
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className="flex items-center gap-3 py-2 text-sm rounded-lg bg-gray-700 transition-colors duration-200 hover:bg-cyan-500 hover:text-black"
                            onClick={() => setOpen(false)}
                          >
                            <div className="p-2 bg-gray-800 rounded-md">
                              <feature.icon className="h-5 w-5 text-blue-400" />
                            </div>
                            <span className="font-medium">{feature.title}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                  <Link
                    href="/learn"
                    className="block px-4 py-2 text-lg font-medium rounded-lg bg-gray-800 transition-colors duration-200 hover:bg-cyan-500 hover:text-black"
                    onClick={() => setOpen(false)}
                  >
                    Learn
                  </Link>

                  <Link
                    href="/academy"
                    className="block px-4 py-2 text-lg font-medium rounded-lg bg-gray-800 transition-colors duration-200 hover:bg-cyan-500 hover:text-black"
                    onClick={() => setOpen(false)}
                  >
                    Academy
                  </Link>
                </div>

                <div className="absolute bottom-4 left-0 right-0 p-4 border-t border-gray-700">
                  <div className="space-y-2">
                    <Button
                      variant="outline"
                      className="w-full text-gray-200 transition-colors duration-200 hover:bg-cyan-500 hover:text-black"
                      onClick={() => setOpen(false)}
                    >
                      Log in
                    </Button>
                    <Button
                      className="w-full bg-blue-600 text-white transition-colors duration-200 hover:bg-cyan-500 hover:text-black"
                      onClick={() => setOpen(false)}
                    >
                      Sign up
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

        </div>
      </header>
    </div>
  );
}
