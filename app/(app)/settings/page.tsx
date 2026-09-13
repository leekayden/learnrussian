import { requireUser } from "@/lib/session";
import { SettingsForm } from "@/components/settings-form";

export const metadata = { title: "Settings — learnrussian" };

export default async function SettingsPage() {
  const { profile } = await requireUser();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Tune the course to your pace.</p>
      </div>
      <SettingsForm
        initial={{
          dailyGoalXp: profile.dailyGoalXp,
          showStress: !!profile.showStress,
          showTranslitKeyboard: !!profile.showTranslitKeyboard,
          unlockAll: !!profile.unlockAll,
        }}
      />
    </div>
  );
}
