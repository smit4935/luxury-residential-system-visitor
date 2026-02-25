import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { visitorAPI } from "../services/api";
import toast from "react-hot-toast";

export default function VisitorManagement() {
  const [visitors, setVisitors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState("all");

  useEffect(() => {
    fetchVisitors();
  }, [selectedStatus]);

  const fetchVisitors = async () => {
    setLoading(true);
    try {
      let response;
      if (selectedStatus === "all") {
        response = await visitorAPI.getAllVisitors();
      } else {
        response = await visitorAPI.getVisitorsByStatus(selectedStatus);
      }

      if (response.data.success) {
        setVisitors(response.data.data);
      }
    } catch (error) {
      toast.error(error.response?.data?.error || "Failed to fetch visitors");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this visitor?")) {
      try {
        const response = await visitorAPI.deleteVisitor(id);
        if (response.data.success) {
          toast.success("Visitor deleted successfully");
          fetchVisitors();
        }
      } catch (error) {
        toast.error(error.response?.data?.error || "Failed to delete visitor");
      }
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      const response = await visitorAPI.updateVisitor(id, { status: newStatus });
      if (response.data.success) {
        toast.success("Status updated successfully");
        fetchVisitors();
      }
    } catch (error) {
      toast.error(error.response?.data?.error || "Failed to update status");
    }
  };

  return (
    <section className="py-18 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-3xl md:text-4xl font-bold text-blue-600"
        >
          Visitor & Delivery Management System
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-4 max-w-4xl mx-auto text-center text-gray-600"
        >
          Manage and track all visitors and deliveries to ensure security and
          authorization.
        </motion.p>

        {/* Filters */}
        <div className="mt-12 mb-8 flex justify-center gap-4 flex-wrap">
          {["all", "Pending", "Approved", "Rejected", "Visited"].map((status) => (
            <button
              key={status}
              onClick={() => setSelectedStatus(status)}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                selectedStatus === status
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {status === "all" ? "All" : status}
            </button>
          ))}
        </div>

        {/* Visitors Table/List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          {loading ? (
            <div className="text-center py-8">
              <p className="text-gray-500">Loading visitors...</p>
            </div>
          ) : visitors.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">No visitors found</p>
            </div>
          ) : (
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="p-4 text-left font-semibold">Name</th>
                  <th className="p-4 text-left font-semibold">Email</th>
                  <th className="p-4 text-left font-semibold">Phone</th>
                  <th className="p-4 text-left font-semibold">Visit Date</th>
                  <th className="p-4 text-left font-semibold">Status</th>
                  <th className="p-4 text-left font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {visitors.map((visitor, index) => (
                  <tr
                    key={visitor._id}
                    className={`border-b hover:bg-gray-50 ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                  >
                    <td className="p-4">{`${visitor.firstName} ${visitor.lastName}`}</td>
                    <td className="p-4">{visitor.email}</td>
                    <td className="p-4">{visitor.phone}</td>
                    <td className="p-4">
                      {new Date(visitor.visitDate).toLocaleDateString()}
                    </td>
                    <td className="p-4">
                      <select
                        value={visitor.status || "Pending"}
                        onChange={(e) =>
                          handleStatusChange(visitor._id, e.target.value)
                        }
                        className={`px-3 py-1 rounded-lg font-semibold text-sm ${
                          (visitor.status || "Pending") === "Approved"
                            ? "bg-green-100 text-green-800"
                            : (visitor.status || "Pending") === "Rejected"
                            ? "bg-red-100 text-red-800"
                            : (visitor.status || "Pending") === "Visited"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Approved">Approved</option>
                        <option value="Rejected">Rejected</option>
                        <option value="Visited">Visited</option>
                      </select>
                    </td>
                    <td className="p-4">
                      <button
                        onClick={() => handleDelete(visitor._id)}
                        className="px-3 py-1 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </motion.div>
      </div>
    </section>
  );
}
