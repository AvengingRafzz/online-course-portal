import { SignIn } from "@clerk/nextjs";


export default function Page() {
  return (
    <section class="bg-white">
      <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside class="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </aside>

        <main class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div class="max-w-xl lg:max-w-3xl">
            <a class="block text-blue-600" href="#">
              <span class="sr-only">Home</span>
            </a>

            <h1 class="mt-6 text-2xl font-bold font-sans text-primary sm:text-3xl md:text-4xl">
              Welcome to LearnAtNeed!!
            </h1>

            <p class="mt-4 leading-relaxed font-sans text-gray-500">
              The study begins here. Sign in and get back to your learning.
            </p>

            <SignIn />
          </div>
        </main>
      </div>
    </section>
  );
}
