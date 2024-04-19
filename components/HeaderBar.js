export default function HeaderBar() {
    return (
      <main className="border border-red-500 p-4">
        <div class="flex justify-between">
        <div class="flex">
            <div class="mr-4">Logo</div>
            <div>Search</div>
        </div>

        <div class="flex">
            <div class="ml-4">Write</div>
            <div class="ml-4">Notifications</div>
            <div class="ml-4">Profile</div>
        </div>
        </div>
      </main>
    );
  }