"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LogOut, Calendar, Clock, User, Phone, Search, CheckCircle, XCircle, Loader2 } from "lucide-react";
import { format, parseISO } from "date-fns";
import { logoutAdmin, getSession } from "@/lib/auth";
import { getAllBookings, getBookingStats, markPaymentReceived, cancelBooking } from "@/lib/bookings";
import { Booking, BookingStatus } from "@/lib/types";

const STATUS_COLORS: Record<BookingStatus, { bg: string; text: string }> = {
  pending_payment: { bg: "bg-yellow-100", text: "text-yellow-700" },
  awaiting_verification: { bg: "bg-blue-100", text: "text-blue-700" },
  confirmed: { bg: "bg-green-100", text: "text-green-700" },
  completed: { bg: "bg-purple-100", text: "text-purple-700" },
  cancelled: { bg: "bg-red-100", text: "text-red-700" },
  overbooked: { bg: "bg-orange-100", text: "text-orange-700" },
};

export default function AdminDashboard() {
  const router = useRouter();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [stats, setStats] = useState(getBookingStats());
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    loadData();
    const interval = setInterval(loadData, 30000);
    return () => clearInterval(interval);
  }, []);

  const loadData = () => {
    setBookings(getAllBookings());
    setStats(getBookingStats());
    setLoading(false);
  };

  const handleLogout = () => {
    logoutAdmin();
    router.push("/admin/login");
  };

  const handleMarkPaid = (bookingId: string) => {
    markPaymentReceived(bookingId);
    loadData();
  };

  const handleCancel = (bookingId: string) => {
    cancelBooking(bookingId);
    loadData();
  };

  const filteredBookings = bookings.filter(b => 
    b.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.id.toLowerCase().includes(searchQuery.toLowerCase())
  ).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-pink-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-2xl font-bold font-serif text-pink-600">StyLash</Link>
            <span className="text-gray-400">|</span>
            <span className="text-gray-600 font-medium">Admin Dashboard</span>
          </div>
          <button onClick={handleLogout} className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg">
            <LogOut className="w-4 h-4" />Logout
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total", value: stats.total, color: "text-gray-900" },
            { label: "Pending", value: stats.pendingPayment, color: "text-yellow-600" },
            { label: "Confirmed", value: stats.confirmed, color: "text-green-600" },
            { label: "Revenue", value: `₱${stats.revenue}`, color: "text-pink-600" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl p-4 shadow-sm text-center">
              <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
              <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-4 mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search bookings..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border rounded-xl focus:border-pink-500 focus:outline-none"
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">ID</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Customer</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Service</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredBookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-mono text-sm text-gray-600">{booking.id}</td>
                    <td className="px-6 py-4">
                      <p className="font-medium">{booking.customerName}</p>
                      <p className="text-sm text-gray-500">{booking.customerPhone}</p>
                    </td>
                    <td className="px-6 py-4 text-sm">{booking.serviceName}</td>
                    <td className="px-6 py-4">
                      <p className="text-sm">{format(parseISO(booking.date), "MMM d, yyyy")}</p>
                      <p className="text-sm text-gray-500">{booking.timeSlot}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs ${STATUS_COLORS[booking.status].bg} ${STATUS_COLORS[booking.status].text}`}>
                        {booking.status.replace("_", " ")}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {booking.status === "awaiting_verification" && (
                        <button onClick={() => handleMarkPaid(booking.id)} className="text-green-600 hover:text-green-700 text-sm font-medium mr-3">
                          Mark Paid
                        </button>
                      )}
                      {(booking.status === "pending_payment" || booking.status === "awaiting_verification") && (
                        <button onClick={() => handleCancel(booking.id)} className="text-red-600 hover:text-red-700 text-sm font-medium">
                          Cancel
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filteredBookings.length === 0 && (
              <p className="text-center text-gray-500 py-12">No bookings found</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}