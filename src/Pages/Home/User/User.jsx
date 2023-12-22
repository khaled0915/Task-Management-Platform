

const User = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Who Can Benefit from TaskTraverse?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Audience Card: Developers */}
          <div className="bg-white p-6 rounded-md shadow-md">
            <div className="text-2xl text-blue-500 mb-4">
              
              <img className="w-20 fill-current" src="https://i.ibb.co/SJtkBFt/software-developer-5873778.png" alt="" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Developers</h3>
            <p className="text-gray-600">Enhance your workflow and project management with TaskTraverse, tailored for developers.</p>
          </div>

          {/* Audience Card: Corporate Professionals */}
          <div className="bg-white p-6 rounded-md shadow-md">
            <div className="text-2xl text-blue-500 mb-4">

              <img className="w-20 rounded-full" src="https://i.ibb.co/GCsQzv3/businessman-9222085.png" alt="" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Corporate Professionals</h3>
            <p className="text-gray-600">Optimize your task management and boost collaboration within your corporate environment.</p>
          </div>

          {/* Audience Card: Entrepreneurs */}
          <div className="bg-white p-6 rounded-md shadow-md">
            <div className="text-2xl text-blue-500 mb-4">
             <img className="w-20 rounded-full" src="https://i.ibb.co/vmdzzZK/creative-mind-6818204.png" alt="" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Entrepreneurs</h3>
            <p className="text-gray-600">Fuel your entrepreneurial journey with TaskTraverse, ensuring efficient task management and progress tracking.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default User;
