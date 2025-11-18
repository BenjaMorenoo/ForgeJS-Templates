function Crud() {
  

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
      <h1 className="text-2xl font-bold mb-4 text-center">
        CRUD con Axios + PocketBase
      </h1>

      <form
        onSubmit={editId ? updateTask : createTask}
        className="flex gap-3 mb-4"
      >
        <input
          type="text"
          placeholder="Nueva tarea"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
        />

        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
        >
          {editId ? "Actualizar" : "Agregar"}
        </button>

        {editId && (
          <button
            type="button"
            onClick={() => {
              setEditId(null);
              setTitle("");
            }}
            className="bg-gray-400 hover:bg-gray-500 text-white px-3 py-2 rounded-lg transition"
          >
            Cancelar
          </button>
        )}
      </form>

      <ul className="space-y-3">
        {tasks.map((t) => (
          <li
            key={t.id}
            className="flex justify-between items-center bg-gray-100 p-3 rounded-lg"
          >
            <span>{t.title}</span>

            <div className="flex gap-2">
              <button
                onClick={() => {
                  setEditId(t.id);
                  setTitle(t.title);
                }}
                className="text-yellow-600 hover:text-yellow-800 text-xl"
              >
                ✏️
              </button>

              <button
                onClick={() => deleteTask(t.id)}
                className="text-red-600 hover:text-red-800 text-xl"
              >
                🗑️
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Crud;
