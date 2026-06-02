import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import { TRAINING_CALENDAR_URL } from "~/components/const/links";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950">
      <Container className="py-12 sm:py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-20">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <Image src="/logo.svg" alt="FairField Center" width={28} height={28} />
              <h3 className="text-lg font-bold text-primary-700 dark:text-primary-400">
                FairField Center
              </h3>
            </div>
            <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
              Nonprofit conflict resolution, mediation, restorative justice, and mediator training for Virginia communities.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:ml-auto lg:min-w-[600px] lg:max-w-[680px] lg:gap-10">
            {/* Services */}
            <div>
              <h4 className="text-sm font-semibold uppercaser text-neutral-500 dark:text-neutral-400">
                Services
              </h4>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link href="/services/mediation" className="text-sm text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400">
                    Mediation
                  </Link>
                </li>
                <li>
                  <Link href="/services/police-referral" className="text-sm text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400">
                    Police Referral
                  </Link>
                </li>
                <li>
                  <Link href="/services/restorative-justice" className="text-sm text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400">
                    Restorative Justice
                  </Link>
                </li>
              </ul>
            </div>

            {/* Training */}
            <div>
              <h4 className="text-sm font-semibold uppercaser text-neutral-500 dark:text-neutral-400">
                Training
              </h4>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link href="/training" className="text-sm text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400">
                    Become a Mediator
                  </Link>
                </li>
                <li>
                  <a
                    href={TRAINING_CALENDAR_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400"
                  >
                    Course Calendar
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold uppercaser text-neutral-500 dark:text-neutral-400">
                Contact Info
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li>
                  <a href="tel:5404340059" className="hover:text-primary-600 dark:hover:text-primary-400">
                    540-434-0059
                  </a>
                </li>
                <li>
                  <span>Community Mennonite Church, 2nd Floor</span>
                  <br />
                  <span>70 S High St</span>
                  <br />
                  <span>Harrisonburg, VA 22801</span>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/fairfieldcenter/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-neutral-200 pt-6 text-xs text-neutral-500 dark:border-neutral-800 dark:text-neutral-500">
          <p>&copy; {new Date().getFullYear()} FairField Center. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
