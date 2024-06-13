import Layout from "../../components/layout";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
import AreaChartComponent from "@/components/ui/charts/AreaChartComponent";
import BarChartComponent from "@/components/ui/charts/BarChartComponent";
import LineChartComponent from "@/components/ui/charts/LineChartComponent";
import Line from "@/components/ui/charts/renderLinehart";
import Image from "next/image"
export default function page() {
    return(
        <main>
            <Layout>
                <main className=" bg-white w-full">
                    <Breadcrumb className="mt-6">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/" className="text-black">User</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                            <BreadcrumbPage className="text-gray-500">John Smith</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    {/* section patient overview */}
                    <section className="mt-10 w-[98%] pe-4 p-4 flex flex-col lg:flex-row justify-between gap-y-8">
                        <div className="w-full lg:w-auto flex flex-col md:flex-row gap-x-5 gap-y-6 justify-start items-center">
                            {/* user profile */}
                            <div className="w-40 h-40 rounded-full flex justify-center items-center">
                                <Image src="/user.jpg" alt="user-profile" width={200} height={200} className="rounded-full"/>
                            </div>
                            {/* Patient name */}
                            <div className="w-full md:w-auto space-y-4">
                                <h2 className="font-bold text-xl text-black">User</h2>
                                <h2 className="text-xl text-black">Mr. John Smith</h2>
                                <button className="text-lg text-black bg-accent px-3 py-1.5 rounded-lg">View Profile</button>
                            </div>
                        </div>
                        <div className="border-t-2 md:border-none my-4 w-full lg:w-[60%] flex flex-col md:flex-row justify-between items-center gap-y-6">
                            <div className="mt-4 md:mt-0 text-lg w-full md:w-90 space-y-4 lg:border-r-2">
                                <p className="text-gray-500">Sex: <span className="text-black">Male</span></p>
                                <p className="text-gray-500">Age: <span className="text-black">32</span></p>
                                <p className="text-gray-500">Blood: <span className="text-black">B+</span></p>
                            </div>
                            {/*  */}
                            <div className="w-full md:w-aut lg:ps-4 text-lg space-y-4">
                                <p className="text-gray-500">Check in: <span className="text-black">06, Jun 2023</span></p>
                                <p className="text-gray-500">Dept: <span className="text-black">Cardiology</span></p>
                                <p className="text-gray-500">Bed: <span className="text-black">0757</span></p>
                            </div>
                        </div>
                    </section>
                    {/* charts */}
                    <section className="mt-10 w-[98%] shadow rounded-md p-5 flex flex-col gap-y-6 md:flex-row justify-between items-center">
                        <div className="w-full md:w-[48%] h-80 flex-col flex justify-center items-center">
                        <h2 className="font-bold text-xl my-4">Vital Signs</h2>
                            <AreaChartComponent/>
                        </div>
                        <div className="w-full md:w-[48%] h-80 flex flex-col justify-center items-center">
                        <h2 className="font-bold text-xl my-4">Medication Adherence</h2>
                            <BarChartComponent/>
                        </div>
                    </section>
                    {/* ecg chart */}
                    <section className="w-[98%] mt-10 shadow md:p-4">
                        <h2 className="font-bold text-xl text-black">Lab Result Trends</h2>
                        {/* ecg data */}
                        <div className="w-full h-60 p-4 flex justify-center items-center">
                            <LineChartComponent/>
                        </div>
                    </section>
                </main>
            </Layout>
        </main>
    )
}