export default function HeaderBar() {
    return (
      <main className="border border-red-500 p-4">
        <div className="flex justify-between">
        <div className="flex">
            <div className="mr-4">Logo</div>
            <div>Search</div>
        </div>

        <div className="flex">
            <div className="ml-4">Write</div>
            <div className="ml-4">Notifications</div>
            <div className="ml-4">Profile</div>
        </div>
        </div>
      </main>
    );
  }