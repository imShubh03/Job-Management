import { Search, MapPin, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function JobBoard() {
  return (
    <div className="min-h-screen bg-[#fbfbff]">
      {/* Navigation Bar */}
      <header className="w-full max-w-6xl mx-auto px-4 py-4">
        <div className="bg-white rounded-full shadow-sm px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-2">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="#" className="text-[#222222] font-medium">
                Home
              </Link>
              <Link href="#" className="text-[#222222] font-medium">
                Find Jobs
              </Link>
              <Link href="#" className="text-[#222222] font-medium">
                Find Talents
              </Link>
              <Link href="#" className="text-[#222222] font-medium">
                About us
              </Link>
              <Link href="#" className="text-[#222222] font-medium">
                Testimonials
              </Link>
            </nav>
          </div>
          <button className="bg-[#a797fd] text-white px-6 py-2 rounded-full font-medium">Create Jobs</button>
        </div>
      </header>

      {/* Search Filters */}
      <div className="w-full max-w-6xl mx-auto px-4 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search By Job Title, Role"
              className="w-full pl-10 pr-4 py-3 border border-[#eaeaea] rounded-md focus:outline-none focus:ring-2 focus:ring-[#a797fd]"
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <MapPin className="h-5 w-5 text-gray-400" />
            </div>
            <select className="w-full pl-10 pr-10 py-3 border border-[#eaeaea] rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-[#a797fd]">
              <option>Preferred Location</option>
            </select>
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <select className="w-full pl-10 pr-10 py-3 border border-[#eaeaea] rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-[#a797fd]">
              <option>Job type</option>
            </select>
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Salary Range Slider */}
        <div className="mt-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[#222222] font-medium">Salary Per Month</span>
            <span className="text-[#222222] font-medium">₹50k - ₹80k</span>
          </div>
          <div className="relative h-2 bg-[#eaeaea] rounded-full">
            <div className="absolute left-0 right-0 h-full">
              <div className="absolute left-0 right-[30%] h-full bg-[#a797fd] rounded-full"></div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#a797fd] rounded-full"></div>
              <div className="absolute right-[30%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#a797fd] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="w-full max-w-6xl mx-auto px-4 mt-10 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Job Card 1 */}
          <JobCard
            logo="/placeholder.svg?height=60&width=60"
            company="Amazon"
            title="Full Stack Developer"
            experience="1-3 yr Exp"
            jobType="Onsite"
            salary="12LPA"
          />

          {/* Job Card 2 */}
          <JobCard
            logo="/placeholder.svg?height=60&width=60"
            company="Tesla"
            title="Node Js Developer"
            experience="1-3 yr Exp"
            jobType="Onsite"
            salary="12LPA"
          />

          {/* Job Card 3 */}
          <JobCard
            logo="/placeholder.svg?height=60&width=60"
            company="Design Agency"
            title="UX/UI Designer"
            experience="1-3 yr Exp"
            jobType="Onsite"
            salary="12LPA"
            logoBackground="#f7881f"
          />

          {/* Job Card 4 */}
          <JobCard
            logo="/placeholder.svg?height=60&width=60"
            company="Amazon"
            title="Full Stack Developer"
            experience="1-3 yr Exp"
            jobType="Onsite"
            salary="12LPA"
          />

          {/* Job Card 5 */}
          <JobCard
            logo="/placeholder.svg?height=60&width=60"
            company="Tesla"
            title="Node Js Developer"
            experience="1-3 yr Exp"
            jobType="Onsite"
            salary="12LPA"
          />

          {/* Job Card 6 */}
          <JobCard
            logo="/placeholder.svg?height=60&width=60"
            company="Design Agency"
            title="UX/UI Designer"
            experience="1-3 yr Exp"
            jobType="Onsite"
            salary="12LPA"
            logoBackground="#f7881f"
          />

          {/* Job Card 7 */}
          <JobCard
            logo="/placeholder.svg?height=60&width=60"
            company="Amazon"
            title="Full Stack Developer"
            experience="1-3 yr Exp"
            jobType="Onsite"
            salary="12LPA"
          />

          {/* Job Card 8 */}
          <JobCard
            logo="/placeholder.svg?height=60&width=60"
            company="Tesla"
            title="Node Js Developer"
            experience="1-3 yr Exp"
            jobType="Onsite"
            salary="12LPA"
          />
        </div>
      </div>
    </div>
  )
}

interface JobCardProps {
  logo: string
  company: string
  title: string
  experience: string
  jobType: string
  salary: string
  logoBackground?: string
}

function JobCard({ logo, company, title, experience, jobType, salary, logoBackground = "#ffffff" }: JobCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-[#eaeaea] relative">
      <div className="absolute top-4 right-4 bg-[#b0d9ff] text-[#00aaff] text-xs font-medium px-3 py-1 rounded-full">
        24h Ago
      </div>

      <div
        className="flex items-center justify-center w-16 h-16 rounded-full overflow-hidden mb-4"
        style={{ backgroundColor: logoBackground }}
      >
        <Image
          src={logo || "/placeholder.svg"}
          alt={company}
          width={60}
          height={60}
          className="w-12 h-12 object-contain"
        />
      </div>

      <h3 className="text-lg font-bold text-[#222222] mb-4">{title}</h3>

      <div className="flex flex-wrap gap-3 mb-4">
        <div className="flex items-center gap-1 text-sm text-[#686868]">
          <User className="w-4 h-4" />
          <span>{experience}</span>
        </div>

        <div className="flex items-center gap-1 text-sm text-[#686868]">
          <MapPin className="w-4 h-4" />
          <span>{jobType}</span>
        </div>

        <div className="flex items-center gap-1 text-sm text-[#686868]">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>{salary}</span>
        </div>
      </div>

      <ul className="mb-6 space-y-2">
        <li className="flex items-start gap-2 text-sm text-[#686868]">
          <span className="text-[#686868] mt-1">•</span>
          <span>A user-friendly interface lets you browse stunning photos and videos</span>
        </li>
        <li className="flex items-start gap-2 text-sm text-[#686868]">
          <span className="text-[#686868] mt-1">•</span>
          <span>Filter destinations based on interests and travel style, and create personalized</span>
        </li>
      </ul>

      <button className="w-full bg-[#00000] hover:bg-[#0099ee] text-white font-medium py-3 rounded-md transition-colors">
        Apply Now
      </button>
    </div>
  )
}

